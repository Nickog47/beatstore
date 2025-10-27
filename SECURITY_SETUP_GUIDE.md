# Repository Security Setup Guide

This guide will help you secure your GitHub repository from unauthorized access and reduce spam emails.

## Files Added

The following security files have been added to your repository:

1. `.github/dependabot.yml` - Controls Dependabot behavior (monthly updates instead of weekly)
2. `.github/CODEOWNERS` - Defines code ownership (only you can approve changes)
3. `.github/SECURITY.md` - Security policy defining contribution rules
4. `.github/pull_request_template.md` - PR template with strict requirements
5. `.github/workflows/close-unauthorized.yml` - Manages external contributions automatically

## Required GitHub Settings (Manual Configuration)

You need to configure these settings manually on GitHub:

### 1. Branch Protection Rules

Go to: **Settings → Branches → Add branch protection rule**

For your main/master branch:
- [x] Require pull request reviews before merging
- [x] Require status checks to pass before merging
- [x] Require branches to be up to date before merging
- [x] Require linear history
- [x] Include administrators (even you must follow the rules)
- [x] Restrict who can push to matching branches
  - Add yourself as the only allowed user

### 2. Repository Visibility and Access

Go to: **Settings → General**

- Make sure "Visibility" is set to **Private** (if this is a private project)
- Under "Danger Zone" → "Disable" these features if not needed:
  - [ ] Wikis (disable if not using)
  - [ ] Projects (disable if not using)
  - [ ] Discussions (disable if not using)

Go to: **Settings → Collaborators and teams**

- Review all collaborators and remove anyone you don't recognize
- Remove all team access if not needed

### 3. Reduce Email Notifications

Go to: **Your GitHub Profile → Settings → Notifications**

Configure these to reduce spam:
- [ ] Uncheck "Participating" for repositories you don't actively maintain
- [ ] Uncheck "Watching" for automatic notifications
- [ ] Under "Dependabot alerts" → Choose "Only notify for repositories I'm watching"

Go to: **Repository → Watch → Custom**

- [x] Issues
- [x] Pull requests
- [ ] Releases (uncheck if you don't need this)
- [ ] Discussions (uncheck if you don't need this)
- [ ] Security alerts (keep this checked!)

### 4. Disable Unnecessary Features

Go to: **Settings → Code security and analysis**

Configure:
- [x] Dependabot alerts (keep enabled for security)
- [x] Dependabot security updates (keep enabled)
- [ ] Dependabot version updates (this is now controlled by dependabot.yml)
- [x] CodeQL analysis (keep enabled - it's already configured)
- [ ] Secret scanning (enable if available)

### 5. Configure Issue and PR Settings

Go to: **Settings → General → Features**

- [ ] Uncheck "Issues" if you don't want random people opening issues
- [ ] Uncheck "Projects" if not using
- [ ] Uncheck "Wiki" if not using
- [ ] Uncheck "Discussions" if not using

If you keep Issues enabled:
- Go to **Settings → Moderation**
- Enable "Limit interactions" to collaborators only

### 6. Fork Settings

Go to: **Settings → General**

Under "Pull Requests":
- [ ] Uncheck "Allow forking" (prevents random people from forking your private repo)

## Email Filtering (Gmail/Outlook)

If you're still getting spam emails, create a filter:

**Gmail:**
1. Search for: `from:notifications@github.com subject:(dependabot OR "Pull request" OR "Issue")`
2. Click "Create filter"
3. Select: "Skip Inbox (Archive)" or "Apply label" → "GitHub/Automated"

**Outlook:**
1. Create a rule for emails from: `notifications@github.com`
2. With subject containing: `dependabot` or `Pull request`
3. Move to folder: "GitHub/Automated"

## How the Security Setup Works

After committing these changes:

### For Pull Requests from External Contributors:
1. **PRs stay open** but get labeled `external-contribution` and `needs-owner-review`
2. **Auto-comment** explains the strict review criteria
3. **You decide** whether to accept, request changes, or close
4. **Only you can merge** - CODEOWNERS enforces your approval
5. **Legitimate bug fixes are allowed**, but you review everything

### For Issues from External Contributors:
1. **Auto-closed immediately** to prevent spam
2. **Comment directs** security reports to private email
3. **Reduces inbox noise** from random issues

### What This Means:
- ✅ Qualified contributors CAN submit PRs for serious bugs/security issues
- ✅ Those PRs stay open for your review (not auto-closed)
- ✅ YOU decide what's legitimate and what's spam
- ✅ Nothing merges without your explicit approval
- ✅ Even pros/team members must get your sign-off
- ✅ Layout/design changes are explicitly rejected unless you approve
- ✅ You review ALL code before it goes live

### Dependabot Behavior:
- Creates PRs monthly instead of weekly (reduces spam)
- Limited to 3 concurrent PRs max
- All PRs assigned to you for review

## Commit These Changes

Once you're ready, commit these security files:

```bash
git add .github/
git add SECURITY_SETUP_GUIDE.md
git commit -m "chore: add repository security configuration"
git push
```

## Additional Security Tips

1. **Enable 2FA** on your GitHub account (Settings → Password and authentication)
2. **Review Access Tokens** regularly (Settings → Developer settings → Personal access tokens)
3. **Check Webhooks** (Repository Settings → Webhooks) - remove any you don't recognize
4. **Review Installed GitHub Apps** (Settings → Applications) - remove unused apps

## Summary

These changes will:
- ✅ Reduce Dependabot spam (monthly instead of weekly)
- ✅ Auto-close spam issues immediately
- ✅ Allow legitimate bug fix PRs (but require your approval)
- ✅ Clearly mark you as the only code owner with merge rights
- ✅ Enforce that ALL changes need your explicit approval
- ✅ Reject layout/design changes unless you approve
- ✅ Make it clear even pros/team members must get your sign-off
- ✅ Provide clear contribution guidelines

### What You Can Expect:
- **Spam issues:** Closed immediately
- **Legitimate bug fix PRs:** Stay open for your review
- **Layout/feature PRs:** You can reject immediately
- **All PRs:** Nothing merges without your approval
- **Dependabot:** Monthly updates, not weekly spam

You maintain complete control while allowing qualified contributors to help with serious issues (only if you approve).
