import React from 'react';

function About (props){


    return (
        <div className="center">
            <h1>About</h1>
            <br></br>
            <h2>What is this?</h2>
            <br></br>
            <p>
                This website provides a RESTful API interface to highly detailed
                 objects built from thousands of lines of data related to Pokémon.
                  We specifically cover the video game franchise. Using this website, 
                  you can consume information on Pokémon, their moves, abilities, types, 
                  egg groups and much, much more.
            </p>
            <br></br><br></br>
            <h2>So who built this?</h2>
            <p>
            PokéAPI V1 was created by Paul Hallett as a weekend project but it quickly became more than a weekend's worth of work. In December of 2014 Paul deprecated V1 in favor of working on V2.

This is where Zane Adickes jumped in. Zane thought the original project was a fantastic idea and wanted to help it grow. With direction from Paul, Zane created the V2 API using an exact mirror of Veekun's data related to the main series of games.

During summer 2018, Paul decided to hand over the project to the community. This is where Tim Malone, Mark Tse, Sargun Vohra, Charles Marttinen, Alessandro Pezzé, Alberto Oliveira da Silva, and Lucio Merotta came together and started planning how to change the infrastructure in order to improve performance and cut down on hosting costs. An important step was to convert the API to serve static JSON files, which was made possible by Sargun and his excellent PokeAPI/ditto tool. The frontend website was also re-built by Charles at the same time. The whole process was completed in October 2018.

After this massive redesign, PokéAPI gained many new consumers due to its new blazing fast performance. To give a quick reference, the loading of the infamous Magikarp pokemon resouce passed from seconds to ~80ms. An important milestone for the PokéAPI project happened shortly after in summer 2020, when its GitHub repository reached 2000 stargazers and in a single month fulfilled 100 million API calls.

In August 2020 the PokéAPI community decided to temporarily fork veekun/pokedex, which was the primary and only source of data. This operation was planned in order to add new generation-8 data, which Veekun lacked. The following people contributed to fetching and formatting generation-8 data: Alessandro Pezzé, Hoang Quoc Trung, Chandler Mahkorn, André Sousa, Alexander Whan, Austin Jones, tomi-912 and Eric Donders.

The current owners of the PokéAPI project are Paul Hallet, Tim Malone and Alessandro Pezzé. Alongside them other core maintainers include Charles Marttinen and Sargun Vohra.

We also have a GitHub organisation of contributors that you are welcome to join!
            </p>
        </div>
    )
}

export default About;