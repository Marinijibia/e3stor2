import CategoryItem from '../category/category.component'
import './categoryMenu.style.scss'


const CategoryMenu = ({categories}) => {
    return (
        <div className="categoriesContainer">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
             ))}
    </div>
    )
}


export default CategoryMenu