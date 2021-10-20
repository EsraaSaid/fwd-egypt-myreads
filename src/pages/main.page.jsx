import BookShelf from "../components/bookshelf";

const MainPage = () => {
    return (
        <>
            <header className="list-books-title">
                <h1>MyReads</h1>
            </header>

            <main className="list-books-content">
                <BookShelf title="Currently Reading" books={[]} />
                <BookShelf title="Want to Read" books={[]} />
                <BookShelf title="Read" books={[]} />
            </main>
        </>
    )

}


export default MainPage;