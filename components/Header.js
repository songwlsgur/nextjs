import Link from 'next/link';


export default function Header() {

    const linkStyle = {
        marginRight: 15
    };

    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    )
}