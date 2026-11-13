<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the birthday journey as separate scene and interaction components, with personalized copy, coordinates and media references centralized in experience-data.ts; this keeps scene logic independent of personal content.
- Load Leaflet dynamically inside effects and clean up map/audio/microphone resources on unmount; browser APIs must not enter SSR module evaluation.
- Use official short music previews until supplied licensed full-song files are available; do not imply previews are complete songs.
- Treat proposal choices as ephemeral UI state, not transmitted answers; the birthday experience has no data-collection service.
