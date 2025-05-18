import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="md-1/3 bg-gray-200 ml-4 mt-3 pt-4">
            <h2>BookMarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;