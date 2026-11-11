# MRI Segmentation Research

Public website: https://yesutorwu.github.io/mri-segmentation-research/

Repository: https://github.com/yesutorwu/mri-segmentation-research

GitHub Pages is configured to deploy `main` from the repository root.

A static academic research site for Yesutorwu Koku-Besa Dzidzornu, UMass Amherst Intelligent MRI Lab. Adult Princeton computational reproducibility is complete for one public subject. TorchIO motion simulation and image-quality evaluation are presented as planned/current work.

## Preview locally

Open `index.html` in a browser for a quick offline preview. For the same relative-URL behavior as hosting, run from this folder:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Visit http://127.0.0.1:8765. Stop with Ctrl+C. No package installation, build step, database, or external fonts are required.

## Structure

- `index.html` contains all sections, numerical results, metadata and captions.
- `assets/css/styles.css` contains responsive layouts, colors and typography.
- `assets/js/site.js` handles mobile navigation, lightboxes and restrained animations.
- `assets/favicon.svg` is a replaceable YKD icon.
- `assets/images/` contains selected adult figures, conceptual diagrams and the sharing banner.
- `assets/images/figure-sources.json` documents the copied result panels and SHA-256 hashes without private filesystem paths.
- `.nojekyll` lets GitHub Pages serve these static files directly.
- `.gitignore` excludes common MRI, archive and secret files.

## Research figures

The owner authorized use of existing public adult project figures. The website copies the already prepared PNG files; it does not process MRI volumes. The MRI source is public ds005115, adult subject sub01/ses01. Atlas input panel uses public Princeton train000. The original figure files remain unchanged.

| Website file | What it displays |
|---|---|
| `adult_t2_labels.png` | Bilateral fresh adult labels on T2, slice index 21 |
| `online_vs_original_local.png` | Red online/original disagreements, crop at slice index 33 |
| `online_labels.png` and `original_labels.png` | Same crop, respective result overlays |
| `stage4_inputs.png` | Subject rough labels, one of the two Stage 4 input panels |
| `atlas_input.png` | Atlas train000 input in its own native space |
| `ml_affine_workflow.png` | Conceptual fitting diagram, no MRI data |
| `atlas_vote_difference.png` | Original/fresh propagated vote difference, slice index 21 |
| `exact_reproduction_result.png` | Fresh corrected result, slice index 33 |
| `original_vote.png` and `fresh_vote.png` | Supplementary vote panels available for future use |
| `motion_simulation_placeholder.png` | Text-only placeholder for future research imagery |
| `linkedin-preview.png` | 1200 × 630 research title banner, no invented scientific result |

Replace a file at the same path to change its image. Update its alt text and caption in HTML, and update the source manifest when changing evidence. Preserve the full aspect ratio, anatomy and any legend. The existing panels have no embedded legend. Captions identify label overlays and red disagreement masks without assigning anatomical meanings to colors.

The motion section currently uses an HTML placeholder. Once actual results are reviewed, replace that placeholder div with a figure element following the other figure patterns, using `motion_simulation_placeholder.png` or a newly named documented image. Update the visible status only when the result is supported.

## Edit text and results

Find the section by its HTML id, such as `reproducibility`, `stage4`, `current` or `about`. Edit text in place. The evidence counts also appear in the snapshot and timeline, so keep the related statements consistent.

The nine workflow boxes describe operations, not nine ASHS stages. The full adult pipeline has seven stages. Stage 4 includes the helper and subsequent refined registration; later outputs include fusion, QA and volumes.

Current numbers were checked against the saved endpoint recount, fresh-run comparison, helper trace comparison, registration comparison, Stage 4 forensic report and worker provenance audit. Those private local evidence files are intentionally outside this website folder.

## Publish free through GitHub Pages

Use a **new, separate public website repository**, for example `mri-segmentation-research`. Keep the existing private research-data repository private. GitHub Free supports Pages from public repositories. This folder contains only the selected website assets and text.

1. Sign into GitHub and create the separate public repository.
2. Add the contents of this folder at its root. `index.html` must be at the root, not nested under another folder. Include `assets/`, README and the empty `.nojekyll` file.
3. Commit to `main`.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then Save.
7. Wait for the Pages deployment to succeed. GitHub displays the actual published URL in Settings → Pages.
8. Open that URL on desktop and phone and check the figures, lightbox, menus and result table.
9. Use the actual URL to complete sharing metadata as described below.

All local asset links are relative so they work at a GitHub Pages repository subpath.

Optional command-line upload, from this website folder only, after creating your chosen repository:

```sh
git init -b main
git add index.html README.md .gitignore .nojekyll assets
git commit -m "Add MRI segmentation research website"
git remote add origin YOUR_NEW_WEBSITE_REPOSITORY_GIT_URL
git push -u origin main
```

Replace the remote placeholder with the actual new repository address. Initial publication used the signed-in GitHub browser and connected GitHub tools; command-line push requires separate Git authentication.

Official instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Update the site later

Edit this folder, preview locally, then commit and push to the website repository's publishing branch. GitHub Pages deploys the new commit. Check the deployed page after the workflow succeeds. Browser caches may require a reload.

## Scientific wording

- Say “Computational reproducibility was achieved for this one adult Princeton ASHS case.”
- The fresh full-run result establishes endpoint label equality. Keep anatomical accuracy separate.
- Dice 0.939079 is overlap with the online result, not 93.9% anatomical accuracy.
- RMSD is a fitting diagnostic. Do not assume its unit or call it anatomical accuracy.
- Label surface sampling differed, but it has not been isolated as the sole cause across the historical builds.
- The current image digest does not establish the exact historical worker digest.
- There are 24 atlas training examples and 617 regular files in the checksum procedure.
- Motion, correction, and ECLARE experiments have no reported benefit or simulated result here.
- The literature timeline is a review outline, not an established chronology or completed systematic review.

## Privacy and release scope

Only selected public adult display figures are included. Do not add pediatric scans, collaborator data, raw NIfTI files, private correspondence, internal logs, workspaces containing local paths, credentials or unpublished collaboration results. Review redistribution permissions for any new dataset or image you add.

The site describes the maintainer information in the owner's approved public narrative, without publishing the email or private server records. The biography comes from the supplied brief.

## LinkedIn preview and personal links

The banner already exists at `assets/images/linkedin-preview.png`. It uses only the research title and researcher name. Replace it with another 1200 × 630 PNG if needed.

The initial publication already sets the absolute `og:image`, `og:url` and canonical URL for the Pages address above. If the website address changes, update the HTML head:

- Change `og:image` from its local relative path to the **absolute HTTPS URL** of the banner.
- Add `<meta property="og:url" content="YOUR_ACTUAL_PAGES_URL">`.
- Add `<link rel="canonical" href="YOUR_ACTUAL_PAGES_URL">`.
- Optionally add Twitter card tags using the same actual URL and banner.

For a project site, the banner URL includes the repository path. Do not guess the deployment URL. LinkedIn cannot reliably retrieve the local relative image URL until this step is completed. After deployment, use LinkedIn Post Inspector to check/refresh the preview.

In the footer replace “Link to be added” spans with anchors to your actual LinkedIn/GitHub profiles. No profile URLs have been invented.

## Accessibility and maintenance

The site uses semantic headings, captions, scoped table headers, visible focus outlines, a skip link, native details controls and a modal dialog. Escape closes the figure lightbox and returns focus. Mobile navigation uses a button with expanded state. Tables scroll inside their own container on phones. Reduced-motion preferences disable scrolling animation and transitions. Text stays available without JavaScript.

## Researcher portrait

`assets/images/yesutorwu-portrait.png` is the owner-supplied photograph shown in the About section. The original photo is preserved unchanged.
