import Grid from '@mui/material/Grid2';
import Head from 'next/head';
import Layout from '@/components/layout';
import ProjectItem from "../components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
    console.log(projects)
    return (
        <>
            <Layout>
                <Head>
                    <title>하상현의 포트폴리오</title>
                    <meta name="description" content="나의 포트폴리오" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </Layout>
            <h1>프로젝트</h1>
            <span>총 프로젝트 : {projects.results?.length}</span>
            <Grid container spacing={3}>
                {projects && projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </Grid>
        </>
    )
}
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()
    return {
        props: { projects },
    }
}