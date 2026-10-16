# Score views study: connecting responses

The study runs on GitHub Pages. Responses are stored in a Google Form and its linked Sheet, so anyone can answer without signing in.

## 1. Create the form (about 3 minutes)

1. Go to forms.google.com and create a blank form called **Score views study**.
2. Add three questions, all **Short answer** or **Paragraph**, none required:
   - `Choice`
   - `Why`
   - `Details`
3. Settings → Responses: turn off **Collect email addresses** and turn off **Restrict to users in your organisation**.

## 2. Get the field ids

1. In the form, open ⋮ → **Get pre-filled link**.
2. Type `A`, `B`, `C` in the three answers and press **Get link**, then **Copy link**.
3. The link looks like `.../viewform?usp=pp_url&entry.111=A&entry.222=B&entry.333=C`. The `entry.` numbers are the field ids.

## 3. Publish the responses sheet

1. In the form, open **Responses** → **Link to Sheets** → create a new sheet.
2. In the sheet, open **File → Share → Publish to web**, choose the response sheet and **Comma-separated values (.csv)**, then **Publish** and copy the link.

## 4. Fill in `config.js`

```js
window.FEEDBACK_CONFIG = {
  formAction: 'https://docs.google.com/forms/d/e/<form id>/formResponse',
  fields: { choice: 'entry.111', why: 'entry.222', details: 'entry.333' },
  resultsCsv: '<the published CSV link>'
};
```

`formAction` is the pre-filled link with `viewform?...` replaced by `formResponse`.

Responses then appear in the Google Form's **Responses** tab, in the Sheet, and on `feedback/results.html`.

## Name and email (private)

Name and email go into their own form questions so they never reach the public results CSV.

1. Add two **Short answer** questions to the form: `Name` and `Email`.
2. In the Sheet, add a tab called `Public` and put this in cell A1:
   `={'Form responses 1'!A:D}` (Timestamp, Choice, Why, Details only).
3. **File → Share → Publish to web**: stop publishing `Form responses 1`, publish the `Public` tab as CSV instead, and put that link in `resultsCsv`.
4. Make a new pre-filled link and copy the two new `entry.` ids into `fields.name` and `fields.email`.

## Results page

The results page lives at an unlisted address and asks for a passcode. GitHub Pages can't truly restrict a page, so treat this as a light lock: the private data (names, emails) stays in the Google Sheet, shared only with the people who need it.
