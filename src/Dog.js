import LightContext from './LightContext'

const Dog = () => {

    const sleepingDogSrc = "https://static.boredpanda.com/blog/wp-content/uploads/2015/06/dog-sleeping-bed-funny-104__605.jpg"
    const awakeDogSrc = "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg"

    return (
        <LightContext.Consumer>
            {({light}) =>

                <div>
                    <img className="dog-image" src={light ? awakeDogSrc : sleepingDogSrc}/>
                </div>
            }

        </LightContext.Consumer>

    )
}

export default Dog