import { ModeToggle } from "@/components/mode-toggle"
import Logo from '@/assets/logo.png'

export default function ChatHeader() {
    return (
        <header className="flex h-16 items-center justify-between  px-6 bg-zinc-300 dark:bg-zinc-800">
                    <div className="flex items-center gap-3">
                    <img src={Logo} className="w-[200px]" alt="Logo" />
          <h1 className="text-lg font-semibold">Chatbot</h1>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </header>
    )
}