In May 2019 the Jet Propulsion Laboratory (JPL) held the tenth edition of the Global Trajectory Optimization Competition (GTOC) named [_Settlers of the Galaxy_](https://gtocx.jpl.nasa.gov/gtocx/competition/). GTOC was started by the Advanced Concepts Team (ACT) of the European Space Agency (ESA). Each edition teams need to optimize a highly complex problem related to interplanetary trajectory design. The problem is provided by the team that won the previous edition. More about the origin of GTOC can be found on the [GTOC origin page](https://sophia.estec.esa.int/gtoc_portal/?page_id=147).

> The task in GTOC X is to settle as many of the one hundred thousand star systems as possible, in as uniform a spatial distribution as possible, while using as little propulsive velocity change as possible.
>
> [Jet Propulsion Laboratory](https://gtocx.jpl.nasa.gov/gtocx/competition/)

During GTOC X I was interning in the ACT. I had a front-row seat during this tense competition. I would encourage everyone to read the [full problem specification](https://gtocx.jpl.nasa.gov/media/gtocX_problem_stmt.pdf). Even though this edition is over it is a fascinating problem to think about. The solution that the ACT came up with is shown in the video in figure 1. They managed to get third in the competition behind NUDT&XSCC and Tsinghua LAD - XINGYI, both from China.

<figure>
  <video src="nlnlORplDTI" width="560" height="315" controls mute />
  <figcaption>Figure 1: The final submission by the Advanced Concept Team.</figcaption>
</figure>

I have used the data provided by JPL for the competition to simulate an approximation of our galaxy using WebGL. The simulation includes 100,000 stars in various circular orbits around the center of the galaxy. An interactive version of this simulation can be found on the [Settlers of the Galaxy playground page](/playground/gtocx-galaxy). The code for this animation can be found in my [GitHub repository](https://github.com/mikeheddes/mikeheddes-website/blob/master/src/pages/playground/gtocx-galaxy.js).
