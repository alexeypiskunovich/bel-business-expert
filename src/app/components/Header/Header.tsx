import Image from 'next/image';
import "@/app/assets/sharedColors/_variables.scss"
import Link from 'next/link';

export default function Header() {
    return (
        <header
            className=" px-6 py-4 flex items-center justify-between"
            style={{ borderBottom: '3px solid var(--line-ink)' }}
        >


            <div className="text-xl font-bold text-gray-800 ml-25">
                <Image
                    aria-hidden
                    src="/logoTextVert.svg"
                    alt="Window icon"
                    width={131}
                    height={109}
                />
            </div>


            <nav className="space-x-15 mr-25">
                <Link href="/about" className="text-lg text-gray-600 hover:text-gray-900 transition" style={{ color: 'var(--color-onyx)' }}>
                    Главная
                </Link>
                <Link href="/services" className="text-lg text-gray-600 hover:text-gray-900 transition" style={{ color: 'var(--color-onyx)' }}>
                    Услуги
                </Link>
                <Link href="/comment" className="text-lg text-gray-600 hover:text-gray-900 transition" style={{ color: 'var(--color-onyx)' }}>
                    Отзывы
                </Link>
                <Link href="/contact" className="text-lg text-gray-600 hover:text-gray-900 transition" style={{ color: 'var(--color-onyx)' }}>
                    Контакты
                </Link>
            </nav>
        </header>
    );
}
