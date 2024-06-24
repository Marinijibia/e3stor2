import './category.style.scss'


const CategoryItem = ({category}) => {
  const { title, imageUrl} = category
  return(
    <div className="categoryContainer">
        <div className="backgroundImage" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="categoryBodyContainer">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
    </div>
  )
}


export default CategoryItem