# Product examples: multi-select plus a comment field in a narrow panel or dialog

Context: a fixed 548px side panel. The coordinator picks several accommodations from a catalogue of 30 to 200+ items in about 6 categories, with search and category tabs. They need to see what they picked and add one optional comment before confirming. A footer selection summary has been ruled out.

Method and caveats:
- Most help-centre articles (Google Drive, Figma, Slack, Shopify, GitHub) give step lists but say nothing about where chips sit or where the message box goes. I checked those layout details against Mobbin screenshots of the live web apps, which I viewed directly. Each Mobbin screen URL below is the evidence for what I describe from that screenshot.
- Mobbin web captures are shown as 768px-wide previews. **Every width below is my inference.** I assumed the capture viewport was about 1440px wide (a scale factor of about 0.53) and converted pixel measurements from the preview. Treat these as ±10% estimates, not measured values.
- Unless a date is given, the Mobbin captures are current (2025–2026): several show 2026 dates or "Spring '26" builds. Older sources are flagged where they appear.
- Several pages would not fetch: the Lightning Design System dueling picklist, the ServiceNow List Collector docs and Linear's label docs (404). Those gaps are noted below.

## 1. Share and invite dialogs: where the chips go and where the message box goes

### Takeaway
The dominant layout is a vertical stack: chips inside the input at the top, then a role or option control, then a message textarea, then the action. Chips wrap inside the field and each has an "×". Google Drive is the clearest case of a two-state dialog. It starts as a search and access list, and once the first person is chosen it switches to a "compose" state with chips, a Notify checkbox and a Message box, plus a back arrow. None of these dialogs is built for more than a handful of selections. With many selections the chip field simply grows.

### Cited Findings
**Google Drive / Docs share (current, 2025–2026 UI)**
- The documented steps are: click Share, "Enter the email address or Google Group", select Viewer, Commenter or Editor, check or uncheck "Notify people", then click Send or Share. The article does not describe chips or the message field. — [Google Drive Help](https://support.google.com/drive/answer/2494822)
- Initial state: a title ("Share 'Feedback Folder'"), one input ("Add people, groups, spaces and calendar events"), a "People with access" list, "General access", and Copy link / Done. — [Mobbin: Drive share, initial](https://mobbin.com/screens/ff1facad-621f-41a4-9d57-3f0c13c23b2d)
- Typing opens a suggestion dropdown under the input that shows avatar, name and email. — [Mobbin: Drive share, suggestions](https://mobbin.com/screens/09c8cde1-5d9e-47a4-9852-b4d0a923be9d)
- After the first pick the dialog changes state. A back arrow appears next to the title. The chosen person appears as a chip (avatar, email, "×") inside the input, with the role dropdown ("Editor") to its right. Below sit a "Notify people" checkbox (checked) and a multi-line "Message" textarea, then Cancel / Send. The "People with access" list disappears. — [Mobbin: Drive share, compose state](https://mobbin.com/screens/828a1d54-ead3-487d-a8f7-e21dfcedc530)
- Width: about 260px in the 768px preview, so roughly 490px at 1440 (inferred). That is close to the 548px panel.

**Salesforce Files share (Lightning, current)**
- Layout: a "Share With" label, a chip input ("John Smith ×") with a role dropdown ("Viewer") beside it, a separate "Add a message..." textarea below, a collapsed "Who Can Access" disclosure, and Cancel / Share. — [Mobbin: Salesforce share](https://mobbin.com/screens/e4175449-83cd-4f2b-9729-8bf8a354eaf1)
- Width: about 325px in the preview, so roughly 610px (inferred).

**Asana "Share form" (current)**
- Layout: a "Send to" chip field holding three chips, each with an avatar and "×", truncated with an ellipsis ("jdoe.mobbin+1@g…"), all on one row. Under it are "Suggested recipients" as a small chip, a toggle, and a collapsible "▾ Customize message" section containing Task name, Due date, Projects and a Description textarea. The footer has Copy link, Cancel and Share form. — [Mobbin: Asana share form](https://mobbin.com/screens/55ab23c3-d773-4a97-8400-1380330ba923)
- The message sits behind a disclosure, so it stays optional and collapsible. Width is roughly 530px (inferred).

**Slack "Add people" to a channel (current)**
- Documented: search by name, email or user group and select. "You can add up to 1,000 people to a channel at once", and for large groups you can paste a list of names or emails. The article does not mention a message option. — [Slack Help](https://slack.com/help/articles/201980108-Add-people-to-a-channel)
- Screens: the dialog offers "Add all members of SLMobbin" / "Add specific people" radios and a single input. A selected person becomes a chip with avatar, name and "×" inside that input, and the button changes from "Skip for now" to "Add". There is no message field. — [Mobbin: Slack add people, empty](https://mobbin.com/screens/e2724057-9c4d-47cd-acf0-4c2bcde82331); [Mobbin: Slack add people, with chip](https://mobbin.com/screens/5b3ce914-be61-4255-b3d7-7ff4c613e61f); [Mobbin: Slack "Add people to #design"](https://mobbin.com/screens/38d6b73b-68e0-4d67-a7b4-b69a3d429188)
- Slack "Invite members to Product Team" is a full-page modal. Chips sit in the "Send invites to" field with Cancel / Save under it. — [Mobbin: Slack invite to team](https://mobbin.com/screens/f1b04543-213c-4d28-82c5-f9355de7bdc4)
- Width: about 265px in the preview, so roughly 500px (inferred).

**Dropbox Dash "Invite people" (current)**
- Layout: four separate "Enter email" fields stacked vertically, then an "Optional message" textarea (pre-filled with editable text), then Cancel / Invite. The selection is a list of fields, not chips. — [Mobbin: Dropbox Dash invite](https://mobbin.com/screens/78bbfb23-ff09-4ff8-a33a-1daea1df069f)

**Figma**
- The help article says only that you invite "using their email address" and that invitees get an email and an in-app notification. It describes neither chips nor a message field. — [Figma Help: sharing and permissions](https://help.figma.com/hc/en-us/articles/1500007609322-Guide-to-sharing-and-permissions)

**Notion**
- Secondary guides say you can keep clicking the invite input to add more people before sending, and Notion then emails everyone on the list. — [thebricks.com guide](https://thebricks.com/resources/how-to-invite-guests-to-notion); [Notion Help: Share your work](https://www.notion.com/help/share-your-work)

**Other share and invite surfaces seen in the gallery**
- ElevenLabs "Share 'Untitled book'": the chip ("…@gmail.com ×") sits on its own row **above** a separate "Search for users or groups" input, followed by an Access row with a role dropdown and then Cancel / Share. Chips and search are separated rather than merged. — [Mobbin: ElevenLabs share](https://mobbin.com/screens/49380684-7917-4ae1-aeb6-01fc0fbe8b54)
- Telegram web "Share with": a chip ("jdoe smith") sits inline at the left of the search bar at the top, and the list below shows a checked radio for the same person. The "SEND" button is full width at the bottom. — [Mobbin: Telegram share](https://mobbin.com/screens/1a118ad4-0880-4ed4-b369-9e1b6ddfeb96)
- Workable "Invite members": an info banner reads "We found 2 email addresses to invite. See if everything looks right, then send the invitations." The chips sit in an "Email address" field, followed by "+ Add more people" and then Cancel / Send invitations. This is an explicit review prompt. — [Mobbin: Workable invite](https://mobbin.com/screens/e87543a9-c7b0-4d8d-8230-237f9b885882)
- Luma "Invite Guests": a **two-column** dialog. The left column reads "Inviting 1 Person" and lists the invitees. The right column holds the message: a fixed greeting, an editable textarea ("please come") and the RSVP link. The footer has Back and Send Invites. — [Mobbin: Luma invite guests](https://mobbin.com/screens/20381215-5f38-4e32-a7dc-199d4d852f6f)
- Voicenotes "Invite your team": chips plus a live-typed email in one tall field, then billing info and Cancel / Next. — [Mobbin: Voicenotes invite](https://mobbin.com/screens/654101a9-6ed8-4924-b8b7-fcba0921b133)

### Inferences
- The share-dialog convention puts the selection (chips) at the top, the comment beneath it and the action last. It carries over most directly to a single-column 548px panel. Google Drive is about 490px wide, so it is nearly the same width.
- These dialogs work because they handle 1–5 recipients, picked through typeahead rather than browsing. None shows a way to handle 20+ chips. The fields just wrap or truncate, as in Asana. For a 200-item browsable catalogue the chip field would need a cap, for example "+N more", or a collapse.
- Drive's state switch (search state, then compose state with a back arrow) is a working precedent for a "pick, then review and comment" flow inside one fixed-size surface.

### Gaps
- Microsoft Teams "Add members" and the Notion share-menu layout: I could not get screenshots or docs describing chip or message placement.
- Figma's invite modal: the help article does not describe the layout, and I found no screenshot.
- Dropbox's main file-share dialog, as opposed to Dash: not captured.
- How Drive's chip field behaves with many recipients (scrolling or growth): not documented.

## 2. Assign and label pickers: showing what is selected in a long list

### Takeaway
Developer and productivity pickers usually show the selection **inside the list itself**: checkmarks, optionally with selected items pinned to the top. GitHub's design system makes this an explicit option, `showSelectedOptionsFirst`. Where a separate summary exists, it is a row of chips in the trigger field above the list (Klaviyo, Substack) or a chip row between search and list (Salesforce). Jira's bulk label edit has historically replaced labels rather than adding them, which shows why a visible review of the final set matters.

### Cited Findings
**GitHub (Primer SelectPanel, which powers the label, assignee and reviewer pickers)**
- SelectPanel is "a dialog that allows users to quickly navigate and select one or multiple items from a list". Its `showSelectedOptionsFirst` prop controls "whether to display the selected items at the top of the list". — [Primer: SelectPanel](https://primer.style/product/components/select-panel/)
- Apply timing: "In anchored panels, changes are applied when the panel closes", while in modal or full-screen variants "changes are applied when the primary action (for example, Save) is confirmed". The examples save the selection on open and restore it on cancel. — [Primer: SelectPanel](https://primer.style/product/components/select-panel/)
- The multi-select guidance says to "maintain their current selections" while the user searches for new items. — [Primer: SelectPanel](https://primer.style/product/components/select-panel/)
- `virtualized` is "recommended for lists with more than 100 items" and "has no effect when `groupMetadata` is provided", so grouped lists are not virtualized. — [Primer: SelectPanel](https://primer.style/product/components/select-panel/)
- Requesting reviewers happens in the right sidebar: you click Reviewers, choose suggested reviewers ("based on git blame data"), or type a username or team. The docs warn that "requesting a review from a large team can notify every team member". There is no comment field in this picker. — [GitHub Docs: requesting a review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

**Linear**
- The issue-list filter menu opens nested popovers, such as a Status list with checkbox-style rows and counts ("3 issues", "11 issues"). Labels are a submenu of the same filter list. — [Mobbin: Linear filter/status picker](https://mobbin.com/screens/d1d26f7d-e1e5-490f-ab4f-c96dd12854c1)

**Jira bulk change**
- Bulk-editing labels has historically **replaced** the whole label set rather than appending. Atlassian tracks this as a long-standing request (JRACLOUD-30729). Some of these sources date from 2013–2014 or are Server-era. — [Atlassian JRACLOUD-30729](https://jira.atlassian.com/browse/JRACLOUD-30729); [Atlassian JRA-30729](https://jira.atlassian.com/browse/JRA-30729)
- On Jira Server, a bulk comment fires "Issue Updated" rather than "Issue Commented", so watchers may not be notified (older). — [JRASERVER-39283](https://jira.atlassian.com/browse/JRASERVER-39283)

**Klaviyo campaign audience (marketing B2B, current)**
- Chips ("Email List (8) ×", "Engaged (30 Days) (8) ×" and others) wrap across two lines in the trigger field. The open dropdown below has a "Filter" search and **group headers** ("List", "Segment"). Checked rows get a blue background as well as a checkbox, so they stand out in the long list. — [Mobbin: Klaviyo audience select](https://mobbin.com/screens/86ef11b2-efbb-4727-90a3-8581f1c92ac7)
- A separate preview card to the right repeats the whole selection in prose ("5 estimated total audience: New Subscribers (5), Email List (8)…"), so the selection is shown in a second place outside the picker. — [Mobbin: Klaviyo audience select](https://mobbin.com/screens/86ef11b2-efbb-4727-90a3-8581f1c92ac7)

**Salesforce "Add Items" (app nav item picker, Lightning, current)**
- This is the closest structural match to the accommodation picker. A left rail ("Available Items: Favorites, All **1**", with a count badge on the category) sits beside a "Search all items..." field. **Directly under the search** is a row of selected chips ("Campaigns ×") with the text "1 item selected", and the long list with "+" add icons follows. The primary button repeats the count: "Add 1 Nav Item". — [Mobbin: Salesforce Add Items](https://mobbin.com/screens/1b9eaaed-13d9-4e6d-ba85-ed05059250a9)
- Width: about 427px in the preview, so roughly 800px including the left rail (inferred).

**Other gallery examples**
- Substack recipe tags: chips ("Breakfast ×", "Brunch ×") sit in the combobox, and the dropdown list marks the selected items with orange checkmarks in place (not pinned). — [Mobbin: Substack tag picker](https://mobbin.com/screens/9ab8993b-c7f0-41c5-bb98-7059408be114)
- Mixpanel value filter: "Select all defined values" and "Select all in list (3)" rows sit above the checked items, with a full-width "Add" button attached under the list. — [Mobbin: Mixpanel filter](https://mobbin.com/screens/87f36249-9cd4-4341-b932-1acaffc62b85)
- Slite search filter: a checkbox list with a "Select..." search, where the checked item is at the top. Whether it was pinned or was already first is not clear. — [Mobbin: Slite filter](https://mobbin.com/screens/4d8c7d18-2dbe-49bd-82aa-72e37269761e)
- Preply "Specialties": a search field, then **grouped sections** ("Recommended for your goal", "More specialties") with right-aligned checkboxes and a "Clear all" / Continue footer. — [Mobbin: Preply specialties](https://mobbin.com/screens/0b12a251-91d6-4918-9d8d-2af43c92ece1)

### Inferences
- For a 200+ item grouped catalogue, the strongest precedents for keeping the selection visible without a footer are: (a) a chip row between search and list, as Salesforce Add Items does; (b) chips in the trigger or header field above the list, as Klaviyo and Substack do; and (c) selected items pinned first, which GitHub/Primer offers as an option.
- Primer's note that virtualization does not work with grouped data suggests that grouped lists of 100+ items need care when selected items are pinned.
- These pickers almost never include a comment field. Comments live in the surrounding surface: the PR conversation in GitHub, the issue in Linear.

### Gaps
- Linear's label picker in its current form (selected labels pinned, label-group exclusivity): the docs page returned 404 and the Mobbin result did not show the label submenu open.
- Gmail "Label as", ClickUp, Monday and Asana's tag picker: not researched in the time available. Whether they pin checked items is undocumented in what I found.
- The Jira Cloud bulk-change wizard steps (choose issues, operation, details, confirmation) and its "Send notification" option: no current Atlassian doc retrieved.

## 3. Enterprise HR, ATS and admin tools

### Takeaway
I found little public, current material on long-catalogue pickers with notes in Workday, Greenhouse, Lever, SuccessFactors or ServiceNow. The useful evidence came from ATS invite flows (Workable's review banner) and Salesforce Lightning pickers. Greenhouse's scorecard guidance does give a useful number: 6–12 attributes per category, which is comparable to an accommodation category.

### Cited Findings
- Greenhouse recommends selecting 6–12 attributes for each scorecard category. Focus attributes are assigned per interview in a section near the bottom of the job's Scorecard page. — [Greenhouse: Focus attributes](https://support.greenhouse.io/hc/en-us/articles/360018399451-Focus-Attributes-on-Scorecards); [Greenhouse: structured hiring scorecard definitions](https://support.greenhouse.io/hc/en-us/articles/360007247412-Structured-hiring-Scorecard-definitions)
- Workable (ATS) invite flow: after you paste addresses it shows "We found 2 email addresses to invite. See if everything looks right, then send the invitations.", with chips in the field. — [Mobbin: Workable invite](https://mobbin.com/screens/e87543a9-c7b0-4d8d-8230-237f9b885882)
- Salesforce Lightning: the Files share dialog has chips, a role control and a separate message box; the Add Items picker has a category rail, search, a chip row under the search, a count and a count in the button. — [Mobbin: Salesforce share](https://mobbin.com/screens/e4175449-83cd-4f2b-9729-8bf8a354eaf1); [Mobbin: Salesforce Add Items](https://mobbin.com/screens/1b9eaaed-13d9-4e6d-ba85-ed05059250a9)

### Inferences
- The Salesforce Add Items dialog is the best public enterprise analog for "category tabs + search + long list + visible selection without a footer". Dropping its left rail and turning the categories into tabs would fit 548px.

### Gaps
- Salesforce dual listbox / dueling picklist (SLDS): the page would not render, so I have no sourced guidance. It is well known as two side-by-side lists, which would be too wide for 548px, but that is unverified here.
- ServiceNow List Collector (slushbucket): the docs page returned only navigation. I could not confirm whether the Service Portal variant uses chips.
- Workday, Lever and SAP SuccessFactors: no public screenshots or docs found for multi-select pickers with a comment.
- Greenhouse "add interviewers" UI: not documented in the pages found.

## 4. Commerce and admin: Shopify, Stripe, HubSpot, Zendesk

### Takeaway
Shopify admin puts the selected count in the **footer-left** of its browse dialogs ("0/500 variants selected"). That matches the pattern you have ruled out, but it is the dominant commerce convention. Shopify also offers an "Included / Excluded / All" tab trio on catalogs. That is a "show selected" filter as tabs, and it carries over directly to a tabbed picker. Small Shopify dialogs put "Select all" and "2 of 3 selected" in a **header row** above the list.

### Cited Findings
- The Shopify Help Center says only "search for products or click Browse, and then add the products" (desktop). On mobile you "Check the products… tap Save or ✓". It does not mention a selected count or filter. — [Shopify Help: manual collections](https://help.shopify.com/en/manual/products/collections/manual-shopify-collection)
- Shopify "Select products" (draft order) and "Add products" (purchase order) dialogs have a search field, "Search by All", "Add filter +" and a "Recently purchased" filter chip. The list has product checkboxes with nested variant checkboxes. The **footer-left** pill reads "0/500 variants selected" or "0 variants selected", with Cancel / Add on the right. — [Mobbin: Shopify select products](https://mobbin.com/screens/823f4ce6-c480-49cd-9cae-e39662abbffc); [Mobbin: Shopify add products to PO](https://mobbin.com/screens/a5f7a33c-3ae8-4652-a951-ac9b68051e0a)
- Width: about 315px in the preview, so roughly 590px (inferred), close to 548px.
- Shopify "Manage sales channels": "Select all" sits at the top left and "**2 of 3 selected**" at the top right of the list header, followed by checkboxes and Cancel / Done. — [Mobbin: Shopify manage sales channels](https://mobbin.com/screens/03612aa1-5f39-49d9-9056-7bc3a5d028cf)
- Shopify "New catalog": the Products card has segmented tabs, "**Included** / Excluded / All", above the table, plus a toggle. Market selections appear as chips with "×" in a Markets row. — [Mobbin: Shopify new catalog](https://mobbin.com/screens/0a7b552d-5351-449e-aa91-f5ef1b2a6d97)
- In the App Bridge Resource Picker API, the merchant confirms a selection and the picker returns an array of the selected resources. You can preselect items with `selectionIds`. — [Shopify.dev: Resource Picker API](https://shopify.dev/docs/api/app-home/apis/user-interface-and-interactions/resource-picker-api)
- A 2025 community bug report shows the footer reading "2 products selected" while the preselected rows showed no checkmark. The count and the row state disagreed. — [Shopify community: Resource Picker regression](https://community.shopify.dev/t/resource-picker-regression-preselected-products-not-rendering-as-checked/23642)
- Polaris resource-list guidance: "Indicate when not all members of a resource are being shown". — [Polaris: Resource list](https://polaris.shopify.com/components/lists/resource-list)

### Inferences
- Shopify's "Included / Excluded / All" tabs suggest adding a "Selected (n)" tab next to the six category tabs. That would give a full review view without using the footer.
- The Shopify bug report is a cautionary example: a count shown apart from the list state can drift out of sync, which is an argument for showing the actual items, not just a number.

### Gaps
- Stripe, HubSpot and Zendesk (macros, tags): not researched in the time available. I found no sourced examples.

## 5. Healthcare order composers and exam-accommodation vendor tools

### Takeaway
Epic's ordering workflow is the closest clinical analog to "pick many, review, sign". It keeps a running list of pending order changes in a sidebar alongside the search, then commits with Pend or Sign. The only public exam-vendor tool I found is Pearson VUE's Reasonable Adjustments Request System. It uses repeated rows (a category dropdown, an item dropdown and a "+" for another accommodation), each with a written rationale, not a browsable catalogue. The guide I found is a 2021 Certiport document, so it is older.

### Cited Findings
**Epic (from institutional training guides, not Epic's own docs; button names vary by site)**
- In the order composer the user clicks **Pend** to sign later or **Sign** to sign now. Pended orders route to the provider's In Basket, in a "My Unsigned Orders" folder, where the provider opens Order Entry and clicks Sign Orders. — [UCHealth research ordering procedures (PDF, 2014, older)](https://www.uchealth.com/wp-content/uploads/sites/3/2014/01/Research-Ordering-Procedures.pdf); [Brigham research orders routing (PDF)](https://www.brighamandwomens.org/assets/BWH/research/pdfs/14-research-id-med-orders-routing-to-in-basket-for-signature.pdf)
- A site guide describes the ordering sidebar as letting users make ordering decisions "while keeping track of order changes as you go", with search inside the sidebar. This comes from a search-result summary of the University of Iowa Epic support pages, and I did not open the page to verify the wording. — [University of Iowa Epic support: Orders](https://epicsupport.sites.uiowa.edu/epic-resources/efficiencies-orders)
- Order sets are opened from the chart's Order Sets section, and one hospital describes searching by Order Set ID. — [AHS CC Key Concepts: Orders (PDF)](https://publicshare.albertahealthservices.ca/Main/assets/cmio/AHS_CC_Key-Concepts_Orders.pdf)

**Pearson VUE / Certiport accommodations**
- Candidates use Pearson VUE's online Reasonable Adjustments Request System, and first-time users register an account. — [Pearson VUE: accommodation process](https://www.pearsonvue.com/us/en/test-takers/accommodations/pearson_approve.vue-test.html)
- In the request form, the candidate selects a disability category from a "Request type" dropdown and the accommodation from a "Request Item" dropdown, then clicks the plus icon to request more. Each request needs a written rationale and supporting documents, and an appeal is available at step 6. The guide is dated 2021 (older). — [RARS Accommodation Guide – Candidate (PDF, Certiport)](https://www-tchs.stjohns.k12.fl.us/wp-content/uploads/2024/04/RARS_Accommodation_Guide_Candidate.pdf)
- Accommodations must be requested before scheduling, and cannot be applied to an exam that is already booked. — [CompTIA Help: accommodations](https://help.comptia.org/hc/en-us/articles/11183018549780-What-Are-Accommodations-and-How-Do-I-Request-One-If-Eligible)

### Inferences
- Pearson VUE's per-row "category + item + rationale" model is the candidate-facing version. A coordinator console handling 200+ items needs browsing and multi-select, but the one shared comment you are planning matches the vendor's rationale field.
- Epic's "running list of pending changes beside the search, then Sign" is the clinical precedent for keeping the review list visible while searching. Epic uses a wide multi-pane layout, though, not a 548px panel.

### Gaps
- Prometric, ETS, College Board SSD Online, Examity, ProctorU and Meazure: I found no public screenshots or docs of coordinator-side accommodation pickers in the time available.
- Epic order composer screenshots: Epic's UI is behind customer logins, so only text descriptions from hospitals are public.

## 6. Two-step "pick, then review" versus a single view with the selection on top

### Takeaway
Both patterns exist. Single-view products put the selection at the top: chips in or under the search (Slack, Salesforce share and Add Items, Telegram, ElevenLabs, Klaviyo, Substack, Asana) or selected items pinned in the list (GitHub/Primer option). Two-step products switch to a review or compose state with a Back control (Google Drive, Luma, Voicenotes "Next", Workable's "See if everything looks right" banner). Products that need a message tend to use the two-step or compose-state approach (Drive, Luma). Pure label and assign pickers stay single-view and have no comment.

### Cited Findings
| Product | Pattern | Selection shown where | Removal | Comment location | Many selections | Surface width (inferred) | Source |
|---|---|---|---|---|---|---|---|
| Google Drive share | Two-state in one dialog (search, then compose with back arrow) | Chips inside the top input, role dropdown beside | "×" on chip | Message textarea under the Notify checkbox | Not documented | ~490px dialog | [828a1d54](https://mobbin.com/screens/828a1d54-ead3-487d-a8f7-e21dfcedc530), [09c8cde1](https://mobbin.com/screens/09c8cde1-5d9e-47a4-9852-b4d0a923be9d), [Help](https://support.google.com/drive/answer/2494822) |
| Salesforce Files share | Single view | Chips in "Share With" field | "×" on chip | "Add a message..." textarea below | Not shown | ~610px | [e4175449](https://mobbin.com/screens/e4175449-83cd-4f2b-9729-8bf8a354eaf1) |
| Asana share form | Single view | Chips in "Send to" field, truncated | "×" on chip | Collapsible "Customize message" section | Chips truncate in one row | ~530px | [55ab23c3](https://mobbin.com/screens/55ab23c3-d773-4a97-8400-1380330ba923) |
| Slack add people | Single view | Chips in input | "×" on chip | None | Up to 1,000 at once; paste a list | ~500px | [5b3ce914](https://mobbin.com/screens/5b3ce914-be61-4255-b3d7-7ff4c613e61f), [Help](https://slack.com/help/articles/201980108-Add-people-to-a-channel) |
| Luma invite guests | Two-step (Back button) | Left column list, "Inviting 1 Person" | Not visible | Right column textarea | List column scrolls (inferred) | ~760px; left column ~265px | [20381215](https://mobbin.com/screens/20381215-5f38-4e32-a7dc-199d4d852f6f) |
| Workable invite | Review step with banner | Chips in field | "×" on chip | None | Not shown | ~550px | [e87543a9](https://mobbin.com/screens/e87543a9-c7b0-4d8d-8230-237f9b885882) |
| Dropbox Dash invite | Single view | One field per email | Clear field | "Optional message" textarea | Fields stack | ~570px | [78bbfb23](https://mobbin.com/screens/78bbfb23-ff09-4ff8-a33a-1daea1df069f) |
| Salesforce Add Items | Single view | Chip row and "1 item selected" between search and list; count on button | "×" on chip | None | Not shown | ~800px with rail | [1b9eaaed](https://mobbin.com/screens/1b9eaaed-13d9-4e6d-ba85-ed05059250a9) |
| Klaviyo audience | Single view, with a second summary card | Chips in trigger field; highlighted checked rows; prose summary card | "×" on chip or uncheck | None | Chips wrap to 2+ lines | Picker ~530px | [86ef11b2](https://mobbin.com/screens/86ef11b2-efbb-4727-90a3-8581f1c92ac7) |
| GitHub / Primer SelectPanel | Single view | Checked items, optionally pinned first | Uncheck | None (anchored panels apply on close) | Virtualize above 100 items (not with groups) | Anchored popover | [Primer](https://primer.style/product/components/select-panel/) |
| Shopify browse products | Single view | Checkboxes; count in footer-left | Uncheck | None | "0/500 variants selected" | ~590px | [823f4ce6](https://mobbin.com/screens/823f4ce6-c480-49cd-9cae-e39662abbffc) |
| Shopify catalog | Single view, tabs | "Included / Excluded / All" tabs | Uncheck | None | Tab filters to the selected set | Full page card | [0a7b552d](https://mobbin.com/screens/0a7b552d-5351-449e-aa91-f5ef1b2a6d97) |
| Pearson VUE RARS | Repeated rows | Each row is one selection | Remove row (inferred) | Rationale per request | "+" adds a row | Full-page form | [PDF 2021](https://www-tchs.stjohns.k12.fl.us/wp-content/uploads/2024/04/RARS_Accommodation_Guide_Candidate.pdf) |

Side panels in the gallery, as width references for 548px:
- Quicken "View Included Accounts" right-side panel: an "Include all" master checkbox with a "**4 of 4 accounts included**" counter at the top right of the list, a **grouped tree** of category parents with child checkboxes, and "+ Account" / Update in the footer. Width is about 226px in the preview, so roughly 425px (inferred). — [Mobbin: Quicken side panel](https://mobbin.com/screens/ee9bca99-93ef-45d4-888f-30d1c51efc10)
- Gumloop "Add a Workflow" right side panel: search, then a checkbox list, then a full-width footer button "Add Selected (0)". Roughly 490px (inferred). — [Mobbin: Gumloop add workflow](https://mobbin.com/screens/f4284f14-7ae8-4f79-9590-7ca5ae6f0fdf)
- Google AI Studio "Model selection" right side panel: search plus **category filter chips** ("All", "Featured", "Gemini", "Live", "Images", "Video", with horizontal scroll). Roughly 520px (inferred). — [Mobbin: Google AI Studio model selection](https://mobbin.com/screens/26756ff2-8eb4-4476-a9cd-055bc11c1fbf)
- Magnific model picker: a wide modal where selected rows are highlighted. A bottom bar lists the selected names as text, with "4/4 models" and Save. This is a footer summary, the pattern you ruled out. — [Mobbin: Magnific model picker](https://mobbin.com/screens/20f7ca1a-83d3-4a7b-85c4-278d0c2d0a88)

### Inferences
- When the flow includes a message, real products either (a) keep the chips compact at the top and put the message under them (Drive compose state, Salesforce, Asana, Dropbox Dash), or (b) switch to a separate review or compose state with a Back control (Drive, Luma, Workable). Option (a) works with a handful of selections. With many selections, products move towards (b) or a count plus a "Selected" tab (Shopify).
- For the 548px panel, the sourced precedents point to two viable designs. The first is a single view: a chip row between search and tabs, collapsing to "+N more", Salesforce Add Items style, with the comment reached after the list. The second is two states: browse, then a review state with a Back arrow that lists the selected items with remove controls and the comment box, Google Drive style. A "Selected (n)" tab next to the category tabs, after Shopify's "Included" tab, is a third option that keeps everything on one surface.
- Google AI Studio and Quicken show that category chips or tabs plus search, and grouped checkbox trees, both fit in panels of roughly 425–520px.

### Gaps
- I found no product that combines a browsable 200+ item grouped catalogue, a visible selection list and a free-text comment in one narrow panel. That exact combination looks rare in public examples, though this is absence of evidence from a limited search, not proof.
- Page Flows, UI Sources and Pttrns were not consulted. Only Mobbin was searched.
