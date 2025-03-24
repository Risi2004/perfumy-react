import one from '../assets/Images/1.jpg'
import two from '../assets/Images/2.jpg'
import three from '../assets/Images/3.jpg'
function Product()
{
    return(
        <div className = "container">
            <div className = "box">
                <img src = {one} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perferendis officiis debitis doloremque ea beatae molestias dolores tenetur repudiandae quod earum voluptas, libero non animi deserunt natus itaque veritatis voluptatum!</p>
            </div>
            <div className = "box">
                <img src = {two}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perferendis officiis debitis doloremque ea beatae molestias dolores tenetur repudiandae quod earum voluptas, libero non animi deserunt natus itaque veritatis voluptatum!</p>
            </div>
            <div className = "box">
                <img src = {three} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perferendis officiis debitis doloremque ea beatae molestias dolores tenetur repudiandae quod earum voluptas, libero non animi deserunt natus itaque veritatis voluptatum!</p>
            </div>
        </div>
    )
}
export default Product