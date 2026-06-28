# Vatsalya Children Care — Deployment & Safe-Change Runbook

> Goal: a live site for real patients that **can never break in production**. Every change is
> previewed before it goes live, and production can roll back to a known-good version in seconds.

**Repo:** `shobhitsinhayt-ui/websites` · project subfolder: `vatsalya-children-care/`
**Production branch:** `main` (protected) · **Production domain:** `vatsalyachildrencare.in` (added later)

---

## How Vercel keeps you safe (the mental model)

1. **Every deployment is immutable and kept forever.** Pushing a new version never overwrites the old
   one — it creates a new deployment. The domain just *points* at whichever deployment you choose.
2. **`main` → Production. Every other branch → its own Preview URL.** A feature branch deploys to a
   throwaway `https://websites-<hash>.vercel.app` that you test *before* merging.
3. **A failed build never goes live.** If a branch doesn't build, Vercel keeps serving the last good
   production deployment. Customers see nothing change.
4. **Instant Rollback.** If a bad version *does* reach production, one click repoints the domain back to
   any previous deployment in ~10 seconds. No rebuild, no git revert needed to stop the bleeding.

---

## Phase 1 — First deployment (one time)

Do this in the Vercel dashboard (https://vercel.com/shobhitsinhayt-uis-projects):

1. **Add New… → Project → Import** the `shobhitsinhayt-ui/websites` repo.
2. **Root Directory:** click *Edit* → select **`vatsalya-children-care`**. ⚠️ Critical — the repo is a
   container; the Next app is in this subfolder.
3. Framework Preset: **Next.js** (auto-detected). Build command, output, install — leave defaults.
4. **Deploy.** You get a `https://<project>.vercel.app` URL.
5. **Verify on the .vercel.app URL** (see Checklist below) before touching the real domain.

> Production branch is `main` by default — confirm under **Settings → Git → Production Branch = main**.

---

## Phase 2 — Go live on the real domain (after verifying)

Only after the .vercel.app site checks out and the §13 TODOs are filled:

1. Vercel → Project → **Settings → Domains → Add** `vatsalyachildrencare.in` (and `www.`).
2. Vercel shows DNS records. At your registrar, set:
   - `A` record `@` → `76.76.21.21` (Vercel), **or** the `CNAME`/nameserver method Vercel recommends.
   - `www` → `cname.vercel-dns.com`.
3. Wait for DNS propagation + automatic HTTPS cert. Vercel shows "Valid Configuration" when ready.
4. The domain now serves the **current production deployment**. From here, the rollback guarantees apply.

---

## Phase 3 — The safe-change workflow (every change, forever)

`main` is **protected**: no direct pushes, PR required, no force-push, no deletion, linear history.
So every change follows this loop:

```bash
# 1. Branch off the latest production
git checkout main && git pull
git checkout -b feat/opd-hours          # descriptive name

# 2. Make the change, build locally to catch errors early
npm run build

# 3. Commit + push the branch
git add -A && git commit -m "feat: add confirmed OPD hours"
git push -u origin feat/opd-hours

# 4. Open a PR
gh pr create --fill
```

Then:
5. **Vercel auto-comments a Preview URL on the PR.** Open it on your phone (mobile-first!) and run the
   Checklist below. This is the real, deployed change — not localhost.
6. If it looks wrong, push more commits to the same branch; the Preview updates. Production is untouched.
7. When the Preview is correct, **merge the PR**. Vercel promotes it to Production automatically.
8. Verify the production domain once more.

> Because `main` is protected, a broken branch literally cannot reach customers without you merging it,
> and Vercel won't promote a build that fails.

---

## Phase 4 — If production ever breaks (rollback)

**Fastest (stops the bleeding immediately):**
1. Vercel → Project → **Deployments**.
2. Find the last known-good deployment (green, before the bad one).
3. **⋯ menu → Promote to Production** (a.k.a. Instant Rollback). Domain repoints in ~10s. No rebuild.

**Then fix forward properly:**
```bash
git checkout main && git pull
git revert <bad-commit-sha>     # or branch off the good tag
git checkout -b fix/rollback-hotfix
# ...fix, push, PR, preview, merge as in Phase 3
```

**Tagged safe points:** `v0.1.0` is the first stable build. Tag each production release:
```bash
git tag -a v0.2.0 -m "OPD hours + photos" && git push origin v0.2.0
```
You can always branch from a tag to recover a known-good state.

---

## Pre-promotion Checklist (run on every Preview URL, on a phone)

- [ ] Page loads, no console errors, hero + all 11 sections render
- [ ] **WhatsApp floating button** opens chat with the prefilled message
- [ ] **Sticky call bar** dials +91 90160 39796
- [ ] All 9 service cards present; FAQ accordion expands/collapses
- [ ] Phone, email, address match the NAP block exactly (no typos)
- [ ] Logo, favicon, and OG image (paste the URL into a link preview) show correctly
- [ ] Fonts render (Alice headings, Lora italics, Poppins body) — not fallback serif/sans
- [ ] `view-source` shows the 3 JSON-LD blocks; validate at https://validator.schema.org
- [ ] Lighthouse (mobile) run — note Performance/SEO scores
- [ ] No leftover `TODO` text visible to visitors that should have been filled

---

## Guardrails already in place

- ✅ `main` branch protection: PR required, force-push & deletion blocked, linear history.
- ✅ `v0.1.0` stable tag for recovery.
- ✅ Every commit authored by you (shobhitsinhayt-ui).

## Optional hardening (later)

- Add the **Vercel deployment status check** as a *required* check on `main` (Settings → Branches) once
  the first deploy registers the check — then GitHub won't even let you merge a PR whose preview failed.
- Enable Vercel **Deployment Protection** (password/Vercel-auth) on Preview URLs so only you can see them.
- Add a `staging` branch with its own subdomain if you ever want a persistent pre-prod environment.
