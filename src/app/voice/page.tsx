import Navbar from "@/components/Navbar";
import FeatureCards from "@/components/voice/FeatureCards";
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import VapiWidget from "@/components/voice/VapiWidget";
import { auth } from "@clerk/nextjs/server"
import { MicIcon } from "lucide-react";


const VoicePage = async () => {
    const {has} = await auth();
    const hasProPlan = has({plan : "ai_basic"}) || has({plan : "ai_pro"});

    if(!hasProPlan) return <ProPlanRequired/>

  return (
    <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
            <div className="flex items-center justify-between bg-linear-to-br from-primary/20 to-primary/10 rounded-3xl p-8">
                <div className="space-y-4">
                    <div className="inline-flex gap-2 px-3 py-2 border border-primary/10 hover:border-primary items-center rounded-full">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">Voice Assistant Ready</span>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-2">AI Voice Assistant</h1>
                        <p className="text-muted-foreground">
                            Talk to your AI dental assistant using natural voice commands. Get instant advice and
                            professional guidance.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="w-32 h-32 flex items-center justify-center bg-linear-to-br from-primary/20 via-primary/10 to-background rounded-full">
                        <MicIcon className="w-16 h-16 text-primary" />
                    </div>
                </div>
            </div>
            <FeatureCards/>
        </div>

        <VapiWidget/>
    </div>
  )
}

export default VoicePage