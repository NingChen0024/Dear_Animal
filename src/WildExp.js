import React ,{ Component }from 'react';


function WildExp() {
    return (
      <div class="container" >
        
                <div class="row">

                        <div class="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center fade-up" >

                        <h4 className='m-3'>Outdoors</h4>

                        <h1 className='m-4'>Wild Explorers</h1>
                        <h4>Children will become a Wild Explorer for the day, learning about three special endangered Australian animals through song, story and play.</h4>
                        </div>
                </div>
            


        <div  class="full-image text-center zoom-in m-5">
            <img src={ require("./images/project/Project_one.jpg")} class="img-fluid" alt="interview process"/>
        </div>

        <p className ='font-weight-bold m-4'>Wild Explorers learn to love and care for animals. Children discover how to protect animals' habitats and the importance of ensuring their survival through play-based learning, stories and song.
                            Children commence their day as Wild Explorers through story-time with our educators. They'll learn about our animals' unique characteristics, habitats and needs. We'll introduce the children to the plight of three of Australia's most endangered species: the Southern Corroboree Frog, Eastern Barred Bandicoot and the Helmeted Honeyeater and explain Zoos Victoria's breeding program to protect these important creatures.
                            Of course Wild Explorers have a lot more to uncover. Children and their supervisors are encouraged to explore our outdoor learning space, the Keeper Kids precinct, unlocking the secrets of what make our animals so special.
                            Who knows what animals you might meet along the way - extraordinary encounters abound for Wild Explorers. Children might feel the rumble of an Asian Elephant's trumpet or take a closer look at the curious Lord Howe Stick Insect on their adventure through the zoo. Check out the program itinerary to find out where and when our animal encounters take place.
        </p>
        <div className='table row d-flex justify-content-center container'>
            <table className="table table-striped">
            <tbody>
                <tr>
                    <td className="table-active" colspan="5">Activity</td>
                    <td className="table-active">Duration</td>
                </tr>
                <tr>
                    <td className="table-primary" colspan="5">Welcome and introduction to your day (9 am)</td>
                    <td className="table-primary">10 minutes</td>
                </tr>
                <tr>
                    <td className='table-warning' colspan="5">Session with Melbourne Zoo teacher</td>
                    <td className='table-warning'>40 minutes</td>
                </tr>
                <tr>
                    <td className='table-info' colspan="5">Animal exhibits, attend educational keeper talks</td>
                    <td className='table-info'>1 - 4 hours</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    );
  }

  export default WildExp