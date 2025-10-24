---
layout: post
title: More about my research
permalink: /info/more_about_research
lang: en
robots: noindex, nofollow
nav_exclude: true
---

[Click here to go back](/info)

My deep dive into chemistry began with a challenge posed by Professor Insung S. Choi during a *Physical Organic Chemistry* lecture. While discussing the bent bond model of double bonds, he offered an A+ to the first student who could find the earliest mention of the σ-π description of double bonds, where σ bonds are described by valence bond theory and π bonds are described by molecular orbital theory. To my dismay, someone else had already found a review article that credits a 1934 paper by W. G. Penney[^1] before the end of the lecture.

<img src="/assets/img/info/bent_bond.png" width="500" style="display: block; margin: 0 auto;"/>

Bent bond description of ethane, ethylene, and acetylene.
{: style="color:gray; font-size: 80%; text-align: center;"}

Later that day, curious whether Penney's work was truly the first, I carefully read through the paper and, to my surprise, found that it did not actually contain the σ-π description as we know it today. Eager to have another shot at the A+, I stayed up late digging through literature from that era. By morning, after an extensive search, I concluded that early discussions on the aromaticity of benzene, such as Hückel's landmark paper in 1931[^2] or Pauling's 1933 paper[^3], were more appropriate. I presented my findings to the class and finally earned the A+.

<img src="/assets/img/info/sigma_pi.png" width="500" style="display: block; margin: 0 auto;"/>

Snippets from Van Vleck's review paper[^4] on the σ-π description of double bonds.<br> π bonds (then called 'ππ bonds') are explained with either<br> valence bond theory (left) or molecular orbital theory (right).
{: style="color:gray; font-size: 80%; text-align: center;"}

While exploring 1930s quantum theories, I came to see that much of chemistry is about distilling complex problems down to their essence, resulting in simple yet useful models. With this newfound appreciation for chemistry, I delved deeper, taking graduate-level courses such as *Quantum Chemistry I, Statistical Mechanics I, Organic Synthesis I, and Organometallic Chemistry*.

<img src="/assets/img/info/organometallics.png" width="500" style="display: block; margin: 0 auto;"/>

A slide I presented for my Organometallic Chemistry class.
{: style="color:gray; font-size: 80%; text-align: center;"}

During this time, I was working in Professor Woo Youn Kim’s lab[^5], extending the capabilities of ACE-Reaction, a graph-theoretic method for predicting reaction mechanisms.[^6] I designed an autoregressive message passing neural network to suggest plausible reaction steps. I also adapted a mathematical formulation of an existing metric that originally applied only to balanced reactions to also handle unbalanced reactions. In addition, I integrated automatic transition state (TS) search routines into ACE-Reaction using both semi-empirical and density functional theory methods.

<img src="/assets/img/info/mpnn.png" width="600" style="display: block; margin: 0 auto;"/>

An autoregressive message passing neural network that I developed to suggest reaction mechanisms.
{: style="color:gray; font-size: 80%; text-align: center;"}

As part of this ongoing effort to expand ACE-Reaction, I also worked on AutoCG, which would completely transform my understanding of chemistry. AutoCG is an algorithm for generating reactant and product conformations for use in interpolation TS search methods.[^7] Its innovation lies in constructing a pseudo-TS structure that qualitatively resembles the true TS. The pseudo-TS is then gradually modified to produce reactant and product structures that are naturally well-aligned, in a manner similar to intrinsic reaction coordinate calculations. 

<img src="/assets/img/info/autocg_overview.png" width="600" style="display: block; margin: 0 auto;"/>

Overview of our AutoCG algorithm.
{: style="color:gray; font-size: 80%; text-align: center;"}

However, early iterations failed to yield the desired reactants or products in certain cases, such as the exo product in a Diels-Alder reaction. By analyzing common features among these failures, I concluded that controlling the R/S configuration at the reaction centers of the pseudo-TS structures would lead to the desired stereochemical configurations in the reactants and products.

<img src="/assets/img/info/autocg_problem.png" width="600" style="display: block; margin: 0 auto;"/>

(a) Exo (left) and endo (right) TS of a Diels-Alder reaction between two cyclopentadiene molecules.<br>(b) Frontside (left) and backside (right) TS of an S<sub>N</sub>2 reaction.
{: style="color:gray; font-size: 80%; text-align: center;"}

Implementing this solution was challenging because RDKit struggled to generate pseudo-TS structures with the correct stereochemistry. Drawing on my experience with molecular modeling kits and force field optimizations in Avogadro, I proposed a workaround: physically twisting two substituents of a stereogenic center to invert its R/S configuration, while continuously optimizing the overall structure using a force field. This approach allowed us to generate all relevant stereoisomers of a pseudo-TS from a single conformer.

<img src="/assets/img/info/autocg_solution.png" width="600" style="display: block; margin: 0 auto;"/>

R/S configuration inversion of a pseudo-TS of a Diels-Alder reaction.
{: style="color:gray; font-size: 80%; text-align: center;"}

Our updated algorithm generated reactant and product conformations that successfully led to the desired TS structures, allowing us to finalize and publish our paper in the *Journal of Chemical Theory and Computation*.[^7] However, what intrigued me most, even more than the publication itself, were the unexpected TS structures that emerged from stereoisomer enumeration. Analyzing TS structures from pathways such as frontside S<sub>N</sub>2 attacks and antarafacial-antarafacial Diels-Alder reactions led me to realize that chemistry, especially its most novel and interesting aspects, extends beyond simplified models.

<img src="/assets/img/info/autocg_reaction_conformations.png" width="600" style="display: block; margin: 0 auto;"/>

Reactant and product conformations of various organic reactions generated with AutoCG.
{: style="color:gray; font-size: 80%; text-align: center;"}

My current project, MetalloGen, lies at the heart of this effort to move beyond simple templates and constructs. MetalloGen is a fully automated 3D conformer generation utility for organometallic compounds.[^8] Unlike its predecessors, it supports a wide range of polydentate and polyhapto ligands, expanding the scope of organometallic compounds accessible to automated computational methods. Drawing on my experience with computational chemistry programs from my work on AutoCG, and my deep understanding of d-orbital chemistry during the *Organometallic Chemistry* course, I proposed key ideas behind several core features of MetalloGen. These included introducing dummy atoms between polyhapto ligands and the metal center to enable 3D conformer embedding with RDKit, and refining embedded structures using both force field and quantum chemical methods.

<img src="/assets/img/info/metallogen_overview.png" width="600" style="display: block; margin: 0 auto;"/>

Overview of our MetalloGen algorithm.
{: style="color:gray; font-size: 80%; text-align: center;"}

I also led the literature review that guided development, curated datasets and catalytic systems to benchmark MetalloGen, and conducted tests and analyses that improved the tool's reliability. As a result, MetalloGen can now automatically generate major classes of organometallic complexes important in catalysis, including metallocenes and half-sandwich structures, which were previously unavailable through fully automated methods. This work, currently submitted, reflects my broader goal: to develop automated computational tools that not only predict established chemistry but also uncover new discoveries in domains that are often overlooked.

<img src="/assets/img/info/metallogen_profiles.png" width="600" style="display: block; margin: 0 auto;"/>

Energy profiles of organometallic reactions generated with MetalloGen.
{: style="color:gray; font-size: 80%; text-align: center;"}

My journey so far has taught me how to transform curiosity into tools and methods that open new directions in molecular and materials science. From building algorithms like AutoCG and MetalloGen to designing machine learning components for ACE-Reaction, I have prepared myself to pursue research that connects physical principles with data-driven approaches. I am especially eager to develop interpretable AI models grounded in chemical theory, generate synthetic datasets through computational chemistry, and create generative models for materials discovery.

Looking ahead, my long-term goal is to lead a research group in academia or industry that advances chemistry and materials science through both computational and machine learning methods. I look forward to the day when my work can spark in others the same sense of curiosity I felt while poring over those early quantum chemistry papers, opening the way to discoveries we cannot yet imagine.

[Click here to go back](/info)

# Footnotes

[^1]: Penney, W. G. The theory of the structure of ethylene and a note on the structure of ethane. *Proceedings of the Royal Society of London. Series A* **1934**, *144*, 166–187. DOI: [10.1098/rspa.1934.0041](https://doi.org/10.1098/rspa.1934.0041)

[^2]: Hückel, E. Quantentheoretische Beiträge zum Benzolproblem. I. Die Elektronenkonfiguration des Benzols und verwandter Verbindungen. *Zeitschrift für Physik* **1931**, *70*, 204–286. DOI: [10.1007/BF01339530](https://doi.org/10.1007/BF01339530)

[^3]: Pauling, L.; Wheland, G. W. The nature of the chemical bond. V. The quantum-mechanical calculation of the resonance energy of benzene and naphthalene and the hydrocarbon free radicals. *Journal of Chemical Physics* **1933**, *1*, 362–374. DOI: [10.1063/1.1749304](https://doi.org/10.1063/1.1749304)

[^4]: Van Vleck, J. H.; Sherman, A. The quantum theory of valence. *Reviews of Modern Physics* **1935**, *7*, 167–228. DOI: [10.1103/RevModPhys.7.167](https://doi.org/10.1103/RevModPhys.7.167)

[^5]: [https://wooyoun.kaist.ac.kr/](https://wooyoun.kaist.ac.kr/)

[^6]: Kim, Y.; Kim, J. W.; Kim, Z.; Kim, W. Y. Efficient prediction of reaction paths through molecular graph and reaction network analysis. *Chemical Science* **2018**, *9*, 825–835. DOI: [10.1039/C7SC03628K](https://doi.org/10.1039/C7SC03628K)

[^7]: Lee, K.; Lee, J.; Park, S.; Kim, W. Y. Facilitating transition state search with minimal conformational sampling using reaction graph. *Journal of Chemical Theory and Computation* **2025**, *21*, 2487–2500. DOI: [10.1021/acs.jctc.4c01692](https://doi.org/10.1021/acs.jctc.4c01692) \[[PDF Article](/assets/2025_Lee_et_al_AutoCG.pdf)\] \[[GitHub](https://github.com/kyunghoonlee777/autoCG)\]

[^8]: Lee, K.; Park, S.; Park, M.; Kim, W. Y. MetalloGen: Automated 3D conformer generation for diverse coordination complexes. *Journal of Chemical Information and Modeling* **2025**, DOI: [10.1021/acs.jcim.5c02074](https://doi.org/10.1021/acs.jcim.5c02074) \[[PDF Article](/assets/2025_Lee_et_al_MetalloGen.pdf)\] \[[GitHub](https://github.com/kyunghoonlee777/MetalloGen)\]