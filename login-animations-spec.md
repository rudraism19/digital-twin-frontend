# Login Screen Animation Spec

Context: Add these 3 animations to the existing login/signup screen (`index.html` or equivalent). Adjust class/id names below to match the actual markup — the selectors here are placeholders describing *which* element each rule targets.

---

## 1. Login Button Click → Success State

**Element:** the primary submit button (`#loginBtn` / `.btn-signin`)

**Behavior:**
- Idle state: solid orange/yellow background (`#F5A623`-ish), text "Sign In"
- On click: button disables, background animates from orange → green, text swaps to a checkmark + "Signed In!", with a quick scale pulse (bounce) as it completes.

**CSS:**
```css
.btn-signin {
  background: #F5B93D;
  color: #fff;
  border-radius: 12px;
  padding: 14px 0;
  width: 100%;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.4s ease, transform 0.25s ease, box-shadow 0.4s ease;
  box-shadow: 0 0 20px rgba(245, 185, 61, 0.4);
}

.btn-signin.success {
  background: #2ECC71;
  box-shadow: 0 0 24px rgba(46, 204, 113, 0.55);
  animation: btnPulse 0.4s ease;
}

@keyframes btnPulse {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.06); }
  100% { transform: scale(1); }
}
```

**JS:**
```javascript
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  loginBtn.disabled = true;

  // TODO: replace with real auth call; awaiting response before showing success
  const success = await performLogin();

  if (success) {
    loginBtn.classList.add('success');
    loginBtn.innerHTML = '&#10003; Signed In!';
    // navigate / redirect after a short beat so the user sees the state
    setTimeout(() => { window.location.href = '/dashboard'; }, 900);
  } else {
    loginBtn.disabled = false;
    // show error state as needed
  }
});
```

---

## 2. Password Strength Meter (Create Account page)

**Element:** password field on the signup form (`#password`), with a thin bar + label placed directly beneath it.

**Markup:**
```html
<div class="password-strength">
  <div class="strength-bar">
    <div class="strength-fill" id="strengthFill"></div>
  </div>
  <div class="strength-row">
    <span id="strengthLabel" class="strength-label weak">WEAK</span>
    <span class="strength-hint">Must be at least 8 characters</span>
  </div>
</div>
```

**CSS:**
```css
.strength-bar {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 8px;
}

.strength-fill {
  height: 100%;
  width: 0%;
  border-radius: 2px;
  transition: width 0.35s ease, background-color 0.35s ease;
}

.strength-row {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 12px;
}

.strength-hint { color: rgba(255,255,255,0.6); }

.strength-label.weak   { color: #FF5C5C; }
.strength-label.medium { color: #F5B93D; }
.strength-label.strong { color: #2ECC71; }
```

**JS (scoring + live update on keyup):**
```javascript
const pwInput = document.getElementById('password');
const fill = document.getElementById('strengthFill');
const label = document.getElementById('strengthLabel');

function scorePassword(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0-4
}

pwInput.addEventListener('input', () => {
  const score = scorePassword(pwInput.value);
  const pct = pwInput.value.length === 0 ? 0 : Math.max(25, (score / 4) * 100);

  fill.style.width = pct + '%';

  label.classList.remove('weak', 'medium', 'strong');
  if (score <= 1) {
    label.textContent = 'WEAK';
    label.classList.add('weak');
    fill.style.backgroundColor = '#FF5C5C';
  } else if (score <= 2) {
    label.textContent = 'MEDIUM';
    label.classList.add('medium');
    fill.style.backgroundColor = '#F5B93D';
  } else {
    label.textContent = 'STRONG';
    label.classList.add('strong');
    fill.style.backgroundColor = '#2ECC71';
  }
});
```

---

## 3. "Continue With" Social Icon Hover

**Element:** each circular icon button in the social row (`.social-btn`)

**Behavior:** on hover, the icon's circular border lights up with a glowing ring and the button scales up slightly; cursor becomes a pointer.

**CSS:**
```css
.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.social-btn:hover,
.social-btn:focus-visible {
  transform: scale(1.12);
  border-color: rgba(255, 215, 110, 0.9);
  box-shadow: 0 0 14px rgba(255, 215, 110, 0.55);
}
```

No JS needed — pure CSS `:hover` state handles this.

---

## Notes for Antigravity implementation
- Colors above (`#F5B93D` orange, `#2ECC71` green, `#FF5C5C` red) approximate the existing theme — match them to the real CSS variables already in the project if defined (e.g. `--accent-gold`, `--success`, `--error`).
- All transitions use `ease` timing around 0.25–0.4s to match the snappy-but-smooth feel in the reference video.
- Keep the button disabled during the login request so the success animation can't double-fire.
