import { redirect } from 'next/navigation'
import Navbar from "~/components/Navbar";
import { auth } from '~/server/auth';


export default async function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    const session = await auth()
    if (!session) return redirect('/sign-in')

    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>

    )
}