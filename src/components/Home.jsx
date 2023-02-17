import React from "react";

export default function Home(props) {
    return (
        <div className="home-page">
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="home-fitness-img.jpg" className="img-fluid rounded-start" alt="A guy doing push-ups with weights" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Time to get Jiggy</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor ac lorem in finibus. Maecenas sit amet tristique neque. Etiam eu felis gravida, varius nisi a, imperdiet ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut mi diam. Aenean blandit dui varius diam pharetra blandit. Sed vestibulum lorem lacus, at varius quam laoreet quis.
                                Fusce a metus mollis, dignissim massa sit amet, laoreet mauris. Aliquam erat volutpat. Fusce tristique hendrerit felis, quis finibus nibh tincidunt nec. Donec efficitur tortor vel tristique cursus. Pellentesque sit amet libero lacinia, tempor sapien condimentum, consequat erat. Pellentesque euismod nisl ac nunc condimentum pellentesque. Duis fringilla urna ligula. Aliquam feugiat euismod nibh rhoncus ultrices.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
                        {/* <article className="article">
                <div className="img-div">
                    <img src="home-fitness-img.jpg" alt="A guy doing push-ups with weights" />
                </div>
                <div className="content-div">
                    <h3>Time to get Jiggy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor ac lorem in finibus. Maecenas sit amet tristique neque. Etiam eu felis gravida, varius nisi a, imperdiet ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut mi diam. Aenean blandit dui varius diam pharetra blandit. Sed vestibulum lorem lacus, at varius quam laoreet quis.
                        Fusce a metus mollis, dignissim massa sit amet, laoreet mauris. Aliquam erat volutpat. Fusce tristique hendrerit felis, quis finibus nibh tincidunt nec. Donec efficitur tortor vel tristique cursus. Pellentesque sit amet libero lacinia, tempor sapien condimentum, consequat erat. Pellentesque euismod nisl ac nunc condimentum pellentesque. Duis fringilla urna ligula. Aliquam feugiat euismod nibh rhoncus ultrices.
                    </p>
                    <p>{!props.data ? "Loading..." : props.data}</p>
                </div>
            </article>  */}
        </div>
    );
}
