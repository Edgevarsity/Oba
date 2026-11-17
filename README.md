# Kotech website

The complete website from `website 2.zip`, organized by purpose.

## Folders

- `index.html`: main homepage.
- `pages/company/`: about, blog, careers, and contact.
- `pages/learning/`: courses, categories, learning plans, videos, and my courses.
- `pages/account/`: profile, login, and signup.
- `pages/store/`: shop, products, cart, and checkout.
- `pages/instructors/`: instructor registration and success pages.
- `pages/support/`: help, accessibility, privacy, and terms.
- `assets/css/`, `assets/js/`, `assets/images/`, `assets/videos/`: styles, scripts, and media.
- `docs/`: original project notes, source-to-destination file map, and unresolved links.
- `archive/original-repository/`: files from the initial GitHub checkout.
- `archive/legacy/`: older alternate pages and styles from the ZIP.
- `archive/empty-files/`: original empty placeholders.
- `archive/references/`: saved reference website and its downloaded files.

## Run locally

From this repository folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Serve the repository root because links use root-relative paths.

## Import notes

The populated homepage replaces the empty root index. Page and asset links were updated for the new structure, including spelling corrections in filenames. Original variants remain archived. `docs/file-map.json` records the location of every website file from the ZIP.

The original site has links to a free-courses page that was not supplied; see `docs/unresolved-references.json`. Existing application behavior and payment placeholders still need a separate functional review.
