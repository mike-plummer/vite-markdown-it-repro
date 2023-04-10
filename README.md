# Vite + `markdown-it` watch rebuild reproduction

A bug exists either in Vite or in `markdown-it` that causes a hang on rebuild when running `vite build --watch`

## Reproduction Steps

### Verify refresh works in `dev`
1. Run app in dev mode `npm run dev`
2. Open `localhost:5173` in browser, app should render text from `markdown.ts`
3. Make a change to text in `markdown.ts`, observe content updates in browser
4. Kill dev process

### Verify rebuild is broken in `build --watch`
1. Launch Vite build + watch: `npm run build -- --watch`
2. Open `localhost:5173` in browser, app should render text from `markdown.ts`
3. Make a change to text in `markdown.ts`, observe content *does not* update in browser
4. Observe in terminal that rebuild was started but never completed
