# Repository Security Setup Guide

This guide will help you secure your GitHub repository from unauthorized access and reduce spam emails.

## Files Added

The following security files have been added to your repository:

1. `.github/dependabot.yml` - Controls Dependabot behavior (monthly updates instead of weekly)
2. `.github/CODEOWNERS` - Defines code ownership (only you can approve changes)
3. `.github/SECURITY.md` - Security policy for your repository
4. `.github/pull_request_template.md` - PR template that warns unauthorized users
5. `.github/workflows/close-unauthorized.yml` - Automatically closes unauthorized PRs/issues

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

## Testing Your Security Setup

After committing these changes:

1. The `close-unauthorized.yml` workflow will automatically close PRs/issues from non-authorized users
2. Dependabot will only create PRs monthly instead of weekly
3. CODEOWNERS will ensure only you can approve changes
4. Branch protection rules (once set) will prevent force pushes

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
- ✅ Auto-close unauthorized PRs and issues
- ✅ Clearly mark you as the only code owner
- ✅ Warn people this is a private repository
- ✅ Provide security guidelines

You'll still get security alerts (important!), but much less spam from random people trying to contribute.
