import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImageUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const { _id, title, description, coverImage, oldPrice, newPrice } = book;

  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book))
  }

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${_id}`}>
            <img
              src={`${getImgUrl(coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${_id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {description.length > 80
              ? `${description.slice(0, 80)}...`
              : description}
          </p>
          <p className="font-medium mb-5">
            ${newPrice}
            <span className="line-through font-normal ml-2">${oldPrice}</span>
          </p>
          <button onClick={()=>handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    oldPrice: PropTypes.number,
    newPrice: PropTypes.number,
  }).isRequired,
};

export default BookCard;
