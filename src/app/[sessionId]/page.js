import useSessionContent from "@/hooks/use-session-content";
import SessionContent from "@/components/presentational/session-content";

export async function generateMetadata({ params }) {
    const sessionId=params.sessionId;
    const [_, singleService] = useSessionContent()
    const singleSessionContent = singleService(sessionId);
    if(singleSessionContent)
    {
        return { title: singleSessionContent.title};
    }
    return { title: 'Sessions'};
}
const SingleSession=({params})=>{
    
    const sessionId=params.sessionId;
    const [_, singleService] = useSessionContent()
    const singleSessionContent = singleService(sessionId);

    return (
        <>
            <main>
                {!!singleSessionContent && <SessionContent sessionData={singleSessionContent}/>}
            </main>
        </>
    )

}

export default SingleSession;
