import Sidebar from "@/components/sidebar"



export default function EditorLayout({ children,}) {
    return (
        <section className="bg-white">
            <Sidebar />
            <h1>Editor</h1>
            {children}
        </section>
    )
}

