import { NextSeo } from "next-seo";
import Project from "../components/Project"; // Assuming this is your reusable component

const Workflows = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-600/10 rounded-full blur-3xl animate-bounce-slow"></div>
            </div>
            <NextSeo
                title="Workflows | Rohit Goswami"
                description="Explore automation workflows built by Rohit Goswami using n8n, including VPS monitoring, email alerts, RAG bots, and more."
                openGraph={{
                    title: "Workflows | Rohit Goswami",
                    description:
                        "Explore automation workflows built by Rohit Goswami using n8n, including VPS monitoring, email alerts, RAG bots, and more.",
                    url: "https://rohitgoswami.com/workflows",
                }}
            />

            <div className="relative z-10 pt-20">
                <h1 className="font-bold text-3xl text-center mb-10">Workflows</h1>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 space-y-28">
                {/* Check VPS Resource Usage Every 15 Minutes */}
                <Project
                    title="VPS Resource Monitor"
                    link="https://n8n.rohitgoswami.com/workflow/GE9DzAM4R3oc7Ge9"
                    imageSrc="/images/workflows/vps-monitor.png"
                    altText="VPS Resource Monitor Workflow"
                    description="This workflow checks CPU, memory, and disk usage on my VPS every 15 minutes. It uses SSH to fetch server stats and logs them to a Google Sheet for tracking. If usage exceeds a threshold, it sends a Slack notification."
                    skills="n8n, SSH, Gmail API"
                />

                {/* Send Email if Server Has Upgradable Packages */}
                <Project
                    title="Server Update Notifier"
                    link="https://n8n.rohitgoswami.com/workflow/2IrpcV5PUQxV8FW2" // Adjust link as needed
                    imageSrc="/images/workflows/server-update.png" // Add your n8n screenshot path
                    altText="Server Update Notifier Workflow"
                    description="Runs a daily check on my VPS for upgradable packages using a script over SSH. If updates are available, it sends an email with the list of packages via Mailgun. Keeps my server secure without manual checks."
                    skills="n8n, SSH, Gmail, Cron"
                />

                {/* RAG Bot */}
                <Project
                    title="RAG Bot"
                    link="/workflows/rag-bot" // Adjust link as needed
                    imageSrc="/images/workflows/rag-bot.png" // Add your n8n screenshot path
                    altText="RAG Bot Workflow"
                    description="A retrieval-augmented generation (RAG) bot powered by n8n. It fetches data from a knowledge base, processes it with OpenAI, and responds to queries via Telegram. Useful for quick, context-aware answers."
                    skills="n8n, OpenAI API, JSON"
                />

                {/* Load Data From Drive to Pinecone */}
                <Project
                    title="Drive to Pinecone Sync"
                    link="https://n8n.rohitgoswami.com/workflow/Lp6CL3yzqJ2IDky3" // Adjust link as needed
                    imageSrc="/images/workflows/drive-pinecone.png" // Add your n8n screenshot path
                    altText="Drive to Pinecone Sync Workflow"
                    description="This workflow syncs files from Google Drive to Pinecone for vector storage. It processes text or PDFs, extracts content, and uploads embeddings to Pinecone for use in AI applications."
                    skills="n8n, Google Drive API, Pinecone, HTTP Request"
                />

                {/* Monitor My Portfolio */}
                <Project
                    title="Portfolio Monitor"
                    link="https://n8n.rohitgoswami.com/workflow/eBVAUctUn1znyDPN" // Adjust link as needed
                    imageSrc="/images/workflows/portfolio-monitor.png" // Add your n8n screenshot path
                    altText="Portfolio Monitor Workflow"
                    description="Tracks updates on my portfolio site (https://rohitgoswami.com). It monitors page changes or downtime using HTTP requests and notifies me via Slack if something’s off. Keeps my online presence in check."
                    skills="n8n, HTTP Request, Gmail API, Cron"
                />
                </div>
            </div>
        </div>
    );
};

export default Workflows;
