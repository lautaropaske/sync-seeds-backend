import express from "express";
const app = express();

const port = 3000

// @ts-ignore
app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

export const viteNodeApp = app;
