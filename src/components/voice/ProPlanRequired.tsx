import { CrownIcon, LockIcon, MicIcon } from "lucide-react"
import Navbar from "../Navbar"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"


const ProPlanRequired = () => {
  return (
    <div className="min-h-screen bg-background">
        <Navbar/>
        {/* main content */}
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
            {/* Access Denied */}
            <div className="relative mb-12 overflow-hidden">
                <div className="bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary">
                                <LockIcon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Pro Feature</span>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">Voice Assistant Access Required</h1>
                                <p className="text-muted-foreground">Upgrade to AI Pro or AI Basic to unlock unlimited voice consultation with our AI dental Assistant</p>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="flex items-center justify-center rounded-full bg-linear-to-br bg-primary/20 to-primary/10 w-32 h-32">
                                <MicIcon className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* upgrade card */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 max-w-2xl mx-auto">
                <CardContent className="relative p-8 text-center">
                    <div className="w-20 h-20 border border-primary cursor-pointer bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Link href="/pro">
                            <LockIcon className="w-10 h-10 text-primary" />
                        </Link>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Upgrade Required</h3>
                    <p className="text-muted-foreground mb-6">
                    The voice assistant feature is available to AI Pro and AI Basic subscribers. Get
                    instant dental advice through natural voice conversations.
                    </p>

                      <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3 justify-center">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">24/7 voice consultations</span>
                          </div>
                          <div className="flex items-center gap-3 justify-center">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">Professional dental guidance</span>
                          </div>
                          <div className="flex items-center gap-3 justify-center">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">Instant pain relief advice</span>
                          </div>
                      </div>

                      <Link href="/pro">
                          <Button className="w-full bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                              <CrownIcon className="mr-2 h-5 w-5" />
                              Upgrade to Pro
                          </Button>
                      </Link>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default ProPlanRequired