# ORENTA website

A component-based homepage built with HTML, CSS and vanilla JavaScript.

## Company services

ORENTA provides:

- Warehousing
- Distribution
- Freight forwarding
- Last-mile delivery

ORENTA's leadership brings 20 years of logistics experience.

## Confirmed freight coverage

### Air freight

ORENTA provides worldwide air cargo service, loading customers' goods for
transportation from any location to destinations around the world. Specific
air freight origin and destination routes have not yet been provided.

### Sea freight

Confirmed shipping origins:

- China
- India
- Dubai, United Arab Emirates

Confirmed destinations:

- Rwanda
- Bukavu, Democratic Republic of Congo
- Goma, Democratic Republic of Congo
- Uganda

The origin and destination lists are documented separately; no additional
locations or specific origin-to-destination pairings are assumed.

## Website information collection (proposed)

The agreed direction is to collect website submissions using custom HTML
forms and vanilla JavaScript, send them to Google Apps Script, and record them
in Google Sheets.

Potential submission categories:

- Requests for a quotation
- General contact inquiries
- Event registrations

This integration has not been implemented. Shipment tracking is not part of
this work. Automatic email confirmations are not assumed.

## Details awaiting confirmation

- Specific air freight origin and destination routes.
- Whether particular sea freight origins pair with particular destinations.
- Final form fields and any validation requirements for each submission
  category.
- Event details and registration requirements.
- Contact and follow-up details for submissions.
- Google Apps Script and Google Sheets implementation and deployment details.
- Whether any email notifications or confirmations are required.

## Run locally

The page uses `fetch()` to load its HTML components, so serve the project over
HTTP instead of opening `index.html` directly with `file://`.

With Python installed, run this command from the project folder:

```powershell
python -m http.server 5500
```

Then open <http://localhost:5500/>. VS Code Live Server is also suitable.

## Project structure

- `index.html` contains the document shell and the ordered component containers.
- `components/` contains the independent HTML sections.
- `css/style.css` defines shared styles and imports each section stylesheet.
- `css/` contains the styles for individual components.
- `js/components.js` fetches the component HTML and starts the page after all
  components load.
- `js/main.js` initializes page-wide behavior.
- `js/navigation.js` handles the responsive navigation menu.
- `Assets/` contains the existing project images and other assets.

## Add a component

1. Add the section markup in `components/your-section.html`.
2. Add its styles in `css/your-section.css`.
3. Import the stylesheet in `css/style.css` with
   `@import url("your-section.css");`.
4. Add `<div data-component="components/your-section.html"></div>` to
   `index.html` where the section should appear.

The component loader automatically fetches every element with a
`data-component` attribute.

## Flag icon attribution

The local country flag SVGs are provided by [FlagCDN](https://flagcdn.com/)
and are based on vector files from Wikimedia Commons. FlagCDN requests a
backlink to [Flagpedia](https://flagpedia.net/).

## Repository workflow

This project is part of the collaborative SHANANA Cargo Website repository.
The [reference website](https://grandlacs-logistics.com/) is listed in the
repository's original project notes.

Team branches:

- `main`: stable production version.
- `dev`: integration and testing branch.
- `john-work`: John's development branch.
- `edison-work`: Edison's development branch.
- `member3-work`: third member's development branch.

Each member works on their own branch and submits completed work to `dev`
through a pull request. After testing and review, approved changes can be
merged into `main`.
