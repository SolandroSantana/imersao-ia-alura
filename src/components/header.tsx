import Logo from '@/assets/logo.png'
import AluraGoogle from '@/assets/Alura-Google.png'

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between  px-6 pt-5 dark:border-gray-800">
        <div className="flex items-center justify-around w-full gap-3">
          <img src={Logo} className="w-[200px]" alt="Logo" />
          <img src={AluraGoogle} className="w-[200px]" alt="Alura + Google" />
        </div>
      </header>
    )
}