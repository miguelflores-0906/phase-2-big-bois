import Postbtn from './Postbtn'

const Boardpost = () => {
    return (
        <div className='board-post'>
            <h1>Title</h1>
            <p>
            Duis at mauris auctor, fermentum elit ac, posuere tortor. Phasellus eget lorem sed nibh rhoncus malesuada. Nam at nibh semper, varius nibh nec, lobortis mi. Morbi eleifend nisi quis congue malesuada. Aliquam erat volutpat. Donec id magna scelerisque, dictum nisl eget, malesuada erat. Mauris porta euismod dui, ut vulputate est sodales in. Nullam et purus consectetur, rutrum libero sit amet, consectetur elit. Cras in mi efficitur, sollicitudin lorem at, lacinia ipsum. Nulla sit amet erat nec felis varius luctus. Pellentesque eu diam semper, luctus erat a, mattis sapien. Curabitur non vestibulum tellus, sed volutpat dui. Nulla eu orci placerat, finibus dolor vitae, dapibus nisl. Quisque ante odio, feugiat non purus vel, condimentum accumsan lorem. Nulla sagittis neque sed eros tincidunt, ullamcorper aliquet dolor lobortis. In ornare sem in dui feugiat gravida.
            </p>
            <div className='board-post-footer'>
                <div className='username'>username</div>
                <Postbtn />
            </div>
        </div>
    )
}

export default Boardpost
