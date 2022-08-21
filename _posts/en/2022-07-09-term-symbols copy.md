---
layout: post
title:  "Term Symbols"
categories: physical-chemistry
lang: en
published: false
---

# Introduction

This article is an in-depth explanation on atomic term symbols based on *Quantum Chemistry* by Levine to supplement chapter 8 of *Physical Chemistry: A Molecular Approach* by McQuarrie. A good understanding of preceding chapters, notably chapters 6 and 7, is required.

The notation used in this article is based on the latter textbook.

# Preliminaries

An atom consists of a nucleus and some electrons. With the Born-Oppenheimer approximation, the nucleus is assumed to be fixed at the origin, and the state of the electrons can be described by a wave function. 

For example, a electronic wave function neutral lithium atom will look like something like below. ($\sigma$ is the spin variable)

$$\psi \left ( x_{1},\, y_{1},\, z_{1},\, \sigma_{1};\;  x_{2},\, y_{2},\, z_{2},\, \sigma_{2};\; x_{3},\, y_{3},\, z_{3},\, \sigma_{3}   \right )$$

For our purposes, the exact form of $\psi$ is not important. What is important is that a particular set of these functions satisfy the Schrödinger equation $\hat{H}\psi =E\psi $, where the Hamiltonian $\hat{H}$ is given below in atomic units.

$$\hat{H} \approx \hat{H}^{(0)} = -\frac{1}{2}\left ( \nabla^{2}_{1}+\nabla^{2}_{2}+\nabla^{2}_{3} \right ) - \frac{3}{r_1} - \frac{3}{r_2} - \frac{3}{r_3} + \frac{1}{r_1} + \frac{1}{r_2} + \frac{1}{r_3}$$

You may wonder why the Hamiltonian $\hat{H}^{\left ( 0 \right )}$ has a superscript $ \left ( 0 \right) $. This is because this Hamiltonian is an approximation of the real Hamiltonian $\hat{H}$, which includes terms due to spin-orbit interaction ($ \hat{H}_{\text{so}} $), due to an external magnetic field ($ \hat{H}_{B} $), due to spin-spin interaction between electrons, etc. Thus, a more accurate approximation of the Hamiltonian would be

$$\hat{H} \approx \hat{H}^{(0)} + \hat{H}_{\text{so}}$$

As the spin-orbit interactions are comparativly weak, we will ignore its contribution $\hat{H}_{\text{so}}$ for now and revisit it when it is necessary.

To recap, we have the Hamiltonian $\hat{H} = \hat{H}_{0}$ (for now), and the eigenfunctions (energy states) and their associated eigenvalues (energy of the energy states).

# Angular Momenta of an Atom

The electronic wave functions of multielectron atoms, like atomic orbitals, have their own angular momenta. As angular momenta are vectors, the total angular momenta can be calculated by vectorally adding the angular momenta for each electron.

For example, consider the total electronic orbital angular momentum $\textbf{L}$, which is the sum of all electronic orbital angular momenta $\textbf{l}$.

$$\textbf{L}=\sum_{i}\textbf{l}_i$$

Thus, the total electronic orbital angular momentum operator $\mathbf{\hat{L}}$, is the sum of all electronic orbital angular momentum operators $\mathbf{\hat{l}}$. [^1]

$$\mathbf{\hat{L}}=\sum_{i}\mathbf{\hat{l}}_i $$

$$= \sum_{i} \left \{ -i\hbar \, \hat{\textbf{i}} \left ( y_i \frac{\partial}{\partial z_i} - z_i \frac{\partial}{\partial y_i} \right ) -i\hbar \, \hat{\textbf{j}} \left ( z_i \frac{\partial}{\partial x_i} - x_i \frac{\partial}{\partial z_i} \right ) -i\hbar \, \hat{\textbf{k}} \left ( x_i \frac{\partial}{\partial y_i} - y_i \frac{\partial}{\partial x_i} \right ) \right \}$$

It can be shown that $\mathbf{\hat{L}}$ commutes with $\hat{H}$. Therefore, $\mathbf{\hat{L}^2}$ and $\mathbf{\hat{L}_z}$ also commute with $\hat{H}$. 

The situation with the spin angular momenta is similar to that of the orbital angular momenta. The total electronic spin angular momentum $\textbf{S}$, which is the sum of all electronic spin angular momenta $\textbf{s}$.

$$\textbf{S}=\sum_{i}\textbf{s}_i$$

Thus, the total electronic spin angular momentum operator $\mathbf{\hat{S}}$, is the sum of all electronic spin angular momentum operators $\mathbf{\hat{s}}$.

$$\mathbf{\hat{S}}=\sum_{i}\mathbf{\hat{s}}_i $$

$\hat{H}$ contains no terms related to spin, thus $\mathbf{\hat{S}}$ commutes with $\hat{H}$. For the same reason, $\mathbf{\hat{S}^2}$ and $\mathbf{\hat{S}_z}$ commute with $\hat{H}$. 

To sum up, the Hamiltonian $\hat{H}$ commutes with $\mathbf{\hat{L}^2}$, $\mathbf{\hat{L}_z}$, $\mathbf{\hat{S}^2}$, and $\mathbf{\hat{S}_z}$. $\mathbf{\hat{L}^2}$ and $\mathbf{\hat{L}_z}$ commute with each other, and $\mathbf{\hat{S}^2}$ and $\mathbf{\hat{S}_z}$ commute with each other for similar reasons. Any orbital angular momentum operator commutes with any spin angular momentum operator (eg. $\mathbf{\hat{L}^2}$ with $\mathbf{\hat{S}_z}$) as they act on different variables. As a result, the operators $\hat{H}$, $\mathbf{\hat{L}^2}$, $\mathbf{\hat{L}_z}$, $\mathbf{\hat{S}^2}$, and $\mathbf{\hat{S}_z}$ all commute with each other, meaning that an energy state (an eigenfunction of $\hat{H}$) can be chosen to also be an eigenfunction of $\mathbf{\hat{L}^2}$, $\mathbf{\hat{L}_z}$, $\mathbf{\hat{S}^2}$, and $\mathbf{\hat{S}_z}$.

For an energy state $\psi$, the following equations hold, with the usual conditions $M_L = -L, \, -L+1 \cdots L-1, \, L$ and $M_S = -S, \, -S+1 \cdots S-1, \, S$.

$$\mathbf{\hat{L}^2}\psi=L(L+1)\hbar^2 \, \psi$$

$$\mathbf{\hat{L}_z}\psi=M_L \hbar \, \psi$$

$$\mathbf{\hat{S}^2}\psi=S(S+1)\hbar^2 \, \psi$$

$$\begin{equation}\mathbf{\hat{S}_z}\psi=M_S \hbar \, \psi\end{equation}$$

The final conclusion of this section is this:

> An energy state of an atom can be characterized by the orbital and spin angular momentum quantum numbers $L$, $M_L$, $S$, and $M_S$.[^3] [^4]

Instead of specifying a particular energy state with its wave function $\psi$, we can now specify it with the four quantum numbers.

# How to obtain L and S

Say you want to characterize the energy states of an excited Helium atom with an electron configuration of $1s^1 2p^1$. You know that these states can be characterized by the four quantum numbers $L$, $M_L$, $S$, and $M_S$. You even know that $M_L = -L, \, -L+1 \cdots L-1, \, L$ and $M_S = -S, \, -S+1 \cdots S-1, \, S$, which means that $M_L$ can be chosen between $-L$ and $L$, while $M_S$ can be chosen between $-S$ and $S$. Only $L$ and $S$ are unknown/not chosen, and it is the goal of this section to determine $L$ and $S$ for $1s^1 2p^1$.

## Determining L

We first consider the orbital angular momenta. What we know as of now is that one electron occupies the $1s$ orbital, while another occupies one of the three $2p$ orbitals. Therefore, for electron 1 (in $1s$), $l_1 = 0$ ($s$ orbital) and $m_{l1} = 0$. For electron 2 (in $2p$), $l_2 = 1$ ($p$ orbital) and $m_{l2} = -1,\; 0,\; +1$ each corresponding to $2p_{-1},\; 2p_{0},$ and $ 2p_{+1}$.

For any atomic orbital $\phi$[^5], $\mathbf{\hat{l}^2}\phi=l(l+1)\hbar^2 \, \phi$  and $\mathbf{\hat{l}_z}\phi=m_l \hbar \, \phi$. Therefore,  $\mathbf{l^2} = l(l+1)\hbar^2$ and $\mathbf{l_z} = m_l \hbar$. As a result, the orbital angular momentum of electron 1 is $\mathbf{l^2_1} = 0$ and $\mathbf{l_{1z}} = 0$, while the orbital angular momentum of electron 2 is $\mathbf{l^2_2} = 2\hbar^2$ and $\mathbf{l_{2z}} = -\hbar, \; 0, \; +\hbar$.

Although angular momenta add vectorally, we cannot add the two orbital angular momenta to obtain the total orbital angular momentum like $\mathbf{\hat{L}} = \mathbf{\hat{l}_1} + \mathbf{\hat{l}_2}$ because only $\mathbf{l^2}$ and $\mathbf{l}_z$ are known. The next best thing to add together would be with these two values.

We cannot add $\mathbf{l^2}$ as $\mathbf{L^2} \neq \mathbf{l^2_1} + \mathbf{l^2_2}$. However, we can add $\mathbf{l}_z$ such that  $\mathbf{L_z} = \mathbf{l_{1z}} + \mathbf{l_{2z}}$ as the component of vectors add for the addition of vectors. Therefore, we add $\mathbf{l_{1z}} = 0$ and $\mathbf{l_{2z}} = -\hbar, \; 0, \; +\hbar$ to obtain $\mathbf{L_z} = -\hbar, \; 0, \; +\hbar$.

Therefore, per (1) and (2),  $M_L = -1, \; 0, \: +1$ and $L$ must equal $1$ such that the condition $M_L = -L, \, -L+1 \cdots L-1, \, L$ is satisfied.

The takeaway is:
- $M_L = \sum_i m_{li}$
- $L$ is determined by values $M_L$ can take

From this, we can suspect that:
- $M_S = \sum_i m_{si}$
- $S$ is determined by values $M_S$ can take

This is explored in the following section. For now, $L = 1$ and therefore $M_L = -1, 0, +1$.

## Determining S

Recall that the quantum numbers of $\alpha$ is $s = \frac{1}{2}$ and $m_s = +\frac{1}{2}$ and the quantum numbers of $\beta$ is $s = \frac{1}{2}$ and $m_s = -\frac{1}{2}$. Thus, they follow these relations.

$$ \mathbf{\hat{S}^2}\alpha=S(S+1)\hbar^2 \, \alpha=\frac{1}{2}\left ( \frac{1}{2} + 1 \right)\hbar^2 \, \alpha $$

$$ \mathbf{\hat{S}_z}\alpha=S_z \hbar \, \alpha = +\hbar \, \alpha $$

$$ \mathbf{\hat{S}^2}\beta=S(S+1)\hbar^2 \, \beta=\frac{1}{2}\left ( \frac{1}{2} + 1 \right)\hbar^2 \, \beta $$

$$ \mathbf{\hat{S}_z}\beta=S_z \hbar \, \beta = -\hbar \, \beta $$

We add the z-component of spin $S_z = s_{1z} + s_{2z}$ to obtain $S_z =$ $+\hbar$ (both spin up), $0$ (one electron spin up, another spin down), $0$ (one electron spin down, another spin up), and $+\hbar$ (both spin down).

In equation form:

|   $M_s$  |       Spin-part      | Is symmetric or antisymmetric |
|:--------:|:--------------------:|:-----------------------------:|
| $+\hbar$ | $\alpha(1)\alpha(2)$ |              Yes              |
|      $0$ |  $\alpha(1)\beta(2)$ |               No              |
|      $0$ |  $\beta(1)\alpha(2)$ |               No              |
| $-\hbar$ |  $\beta(1)\beta(2)$  |              Yes              |

A particular problem arises with the spin-part of wavefunctions with $M_s = 0$. All electronic wavefunctions must be antisymmetric to the exchange of any two electrons, due to their indistinguisability. Therefore, the spin-part of any electronic wavefunction must be either symmetric or antisymmetric, which can then be paired with antisymmetric or symmetric spatial-part to produce a net antisymmetric wavefunction.

As a result, instead of $\alpha(1)\beta(2)$ and $\beta(1)\alpha(2)$, we their linear combinations $\frac{1}{2} \left ( \alpha(1)\beta(2) + \beta(1)\alpha(2) \right ) $ and $\frac{1}{2} \left ( \alpha(1)\beta(2) - \beta(1)\alpha(2) \right )$.

As the two new spin-parts are linear combinations of spin-parts with $M_s = 0$, The new $M_s$ values are both 0.

|   $M_s$  |                               Spin-part                              | Is symmetric or antisymmetric |
|:--------:|:--------------------------------------------------------------------:|:-----------------------------:|
| $+\hbar$ |                         $\alpha(1)\alpha(2)$                         |           Symmetric           |
|      $0$ | $\frac{1}{2} \left ( \alpha(1)\beta(2) + \beta(1)\alpha(2) \right )$ |           Symmetric           |
|      $0$ | $\frac{1}{2} \left ( \alpha(1)\beta(2) - \beta(1)\alpha(2) \right )$ |         Antisymmetric         |
| $-\hbar$ |                          $\beta(1)\beta(2)$                          |           Symmetric           |

Notice that three of the spin-parts are symmetric - each with different $M_s$ values. These spin-parts pair with an antisymmetric spatial-part ($\frac{1}{2}\left(1s(1)2p(2)-1s(2)2p(1)\right)$ for our case) to produce three degenerate electronic wavefunctions (degenerate as energy is only dependent on the spatial-part for now).

We have three states for a single energy level. The $M_s$ of each state are $+\hbar, 0, $ and $-\hbar$, and the $M_s$ of each state are $+1, 0, $ and $-1$. Just like $L$ and $M_L$ above, $S$ must be $1$ as $M_s$ ranges from $-S$ to $+S$.

To summarize, we have three states for a single energy level, and $L=1$ for all three states. This energy level is called a "triplet", as there are three degenerate states.

The remaining spin-part, $\frac{1}{2} \left ( \alpha(1)\beta(2) - \beta(1)\alpha(2) \right )$, is paired with a symmetric spatial-part ($\frac{1}{2}\left(1s(1)2s(2)-1s(2)2s(1)\right)$ for our case), to produce a single electronic wavefunction. This state is called a "singlet state", and its $S = 0$ as $M_S = 0$. 

As an aside, the $S$ and $M_S$ of all four wavefunctions can be directly obtained via operating on the wavefunctions with $\mathbf{\hat{S}^2}$ and $\mathbf{\hat{S}_z}$. See pages 311-312 of *Levine*.

In conclusion, either $S = 1$ (and $M_S = +1, 0, -1$) or $S = 0$ (and $M_S = 0$).

# How to obtain J

## What is J?

In the previous section, we have found that the states corresponding to excited helium with a $1s^12p^1$ configuration have (1) $L = 1$ & $M_L = -1, 0, +1$ and $S = 1$ & $M_S = -1, 0, +1$ **or** (2) $L = 1$ & $M_L = -1, 0, +1$ and $S = 0$ & $M_S = 0$. For the former set of quantum numbers, there are 9 degenerate states as 3 $M_L$ values and 3 $M_S$ values are possible. For the latter set of quantum numbers, there are 3 degenerate states as 3 $M_L$ values and 1 $M_S$ values are possible. In total, there are 12 degenerate states for the configuration $1s^12p^1$.

With this example and also in general, the number of  states for a particular electron configuration is equal to $\sum \left(2L+1\right) \left(2S+1\right)$ for all possible combinations of $L$ and $S$.

We've investigated $\mathbf{L}$, the total orbital angular momentum, and $\mathbf{S}$, the total spin angular momentum. Then, by the virtue of vector addition, there must be a total angular momentum - the sum of all angular momenta. We call this total angular momentum $\mathbf{J}$, defined as shown below. 

$$\mathbf{J} = \mathbf{L} +\mathbf{S}$$

An associated operator $\mathbf{\hat{J}}$ can be defined in a similar fashion.

$$\mathbf{\hat{J}} = \mathbf{\hat{L}} +\mathbf{\hat{S}}$$

Like other angular momentum operators, $\mathbf{\hat{J}^2}$ and $\mathbf{\hat{J}_z}$ commute as shown.

$$\mathbf{\hat{J}^2}\phi=J(J+1)\hbar^2 \, \phi$$

$$\mathbf{\hat{J}_z}\phi=M_J \hbar \, \phi$$

The quantum number $M_J$ ranges from $+J$ to $-J$. 

## The addition of angular momenta

To obtain $\mathbf{J^2}$ and $\mathbf{J_z}$ (and thus the quantum numbers $J$ and $M_J$), we must "add" $\mathbf{L}$ and $\mathbf{S}$. Obtaining $\mathbf{J^2}$ is hard as $\mathbf{J^2} \neq \mathbf{L^2} + \mathbf{S^2}$. Obtaining $\mathbf{J_z}$ is straight forward as $\mathbf{J_z} = \mathbf{L_z} + \mathbf{S_z}$ (the components of vectors add just fine). In terms of quantum numbers, $M_J = M_L + M_S$.

For a given $L$ and $S$, there are several possible values of $M_L$ and $M_S$. For the case of (1) $L = 1$ and $S = 1$, $M_L = -1, 0, +1$ and $M_S = -1, 0, +1$. The possible values of $M_J = M_L + M_S$ from all possible combinations $M_L$ and $M_S$ are, in descending order, $+2, \, +1, \, +1, \, 0, \, 0, \, 0, \, -1, \, -1, \, -2$. Can this information about $M_J$ allow us to elucidate $J$?

Recall that for a particular value of $J$, the value of $M_J = -J, \, -J+1, \, \cdots, \, +J-1, +J$. If some of the states with $L = 1$ and $S = 1$ has $J = 2$, then those states will be of $M_J = +2, \, +1, \, 0, \, -1, \, -2$. Thus in total, there are five states with $L = 1$, $S = 1$, and $J = 2$, with four states left unassigned.

If we cross out $M_J = +2, \, +1, \, 0, \, -1, \, -2$ from $+2, \, +1, \, +1, \, 0, \, 0, \, 0, \, -1, \, -1, \, -2$, we are left with $+1, \, 0, \, 0, \, -1$. If we assume that some of these remaining states has $J = 2$, then those states will be of $M_J = +1, \, 0, \, -1$. Crossing out these from $+1, \, 0, \, 0, \, -1$ leaves us with $0$, which obviously is the state with $J=0$ and $M_J = 0$.

To summarize, nine states characterized by quantum numbers $L = 1$ & $M_L = -1, \, 0, \, +1$ and $S = 1$ & $M_S = -1, \, 0, \, +1$ can be also characterized by the quantum numbers related to the total angular momentum: $J = 2$ & $M_J = +2, \, +1, \, 0, \, -1, \, -2$ and $J = 1$ & $M_J = +1, \, 0, \, -1$ and $J = 0$ & $M_J = 0$.

## A generalization of addition of angular momenta

The procedure works not just with angular momentum quantum numbers $L$ and $S$, but with any angular momentum quantum numbers. Consider $j_1$ and $j_2$, two angular momenta quantum numbers. Their z-component counterparts, $m_{j_1}$ and $m_{j_2}$, add to form $M_J$. The maximum value of $M_J$ is the sum of the maximum value of $m_{j_1}$ and the maximum value of $m_{j_2}$, which are $m_{j_1} = +j_1$ and $m_{j_2} = +j_2$.

As $M_J = +J, \, \cdots, \, -J$ for a particular $J$, $J_{\text{max}}$ must equal $j_1 + j_2$ in order for the maximum value of $M_J$ to be $j_1 + j_2$. Eliminating $+J, \, \cdots, \, -J$ from all possible values of $M_J$ results in the next maximum value of $M_J$ being $j_1 + j_2 - 1$.

Continue eliminating values of $M_J$ for a particular $J$, and eventually you will end up with values of $M_J$ for a single, last value of $J$. This $J$ is $J_{\text{min}}$, and with a quick algebraic derivation[^6] leads to the result $J_{\text{max}} = \left | j_1 - j_2 \right |$. 

Thus, a general theorem on the addition of angular momenta.

> The addition of two angular momenta characterized by quantum numbers $j_1$ and $j_2$ results in a total angular momentum whose quantum number $J$ has the possible values
> $$ J=j_1 + j_2, \;\; j_1 + j_2 - 1, \, \cdots, \, \left | j_1 - j_2 \right |$$

For a particular $j_1$ and $j_2$, the number of possible states stays the same whether it is characterized by $j_1$ and $j_2$ or by $J$ alone.

$$ \sum_{\text{all} \,\left ( j_1,\, j_2 \right )} \left ( 2j_1 + 1 \right )\left ( 2j_2 + 1 \right ) = \sum_{J \,= \, \left | j_1 - j_2 \right | }^{j_1+j_2} \left ( 2J+1 \right ) $$

Unbeknownst to you, we have previously added angular momenta to obtain $L$ and $S$. Let us revisit obtaining $L$ for the $1\text{s}^12\text{p}^1$ configuration. Electron 1 has $l_1 = 0$ (1s orbital) and electron 2 has $l_2 = 1$ (2p orbital). By our theorem, $L_{\text{max}} = 0 + 1 = 1$. This just means that $L = 1$ and $L_{\text{min}} = \left | 0 - 1 \right | = 1$. Previously, we sloppily added $l_1 + l_2 = L$ to obtain $L=1$, but the above procedure is the correct way to add angular momenta. We can see that this result checks out as $\left ( 2l_1 + 1 \right )\left ( 2l_2 + 1 \right ) = 1 \times 3 = 2L+1$.

For a more challenging example, let us try adding $L = 1$ and $S = 1$ - same as the example in the previous section. $J_{\text{max}} = 1 + 1 = 2$ and $J_{\text{min}} = \left | 1 - 1 \right | = 0$. As a result, $J = 0, \, 1, \, 2$. The same result from the previous section can be obtained with much ease. 

To reiterate, the total orbital angular momentum quantum number $J$ is obtained from the total orbital angular momentum quantum number $L$ and the total spin angular momentum quantum number $S$ via the following equation.

$$ J=L + S, \;\; L + S - 1, \, \cdots, \, \left | L - S \right |$$

$$ \sum_{\text{all} \,\left ( L,\, S \right )} \left ( 2L + 1 \right )\left ( 2S + 1 \right ) = \sum_{J \,= \, \left | j_1 - j_2 \right | }^{j_1+j_2} \left ( 2J+1 \right ) $$

# $L$, $S$, and $J$ of $1s^12p^1$

We have side-tracked to much in the machinery of angular momenta addition - now is the time to tackle $1s^12p^1$ once and for all. Before we begin,


# Footnotes

[^1]: $\hat{\textbf{i}}$, $\hat{\textbf{j}}$, $\hat{\textbf{k}}$ is are unit vectors not operators.

[^2]: This is perhaps unsuprising given that the atomic orbitals used to construct Slater determinants, hydrogenlike orbitals $R_{nl}(r)\,  Y_{l}^{m}(\theta, \phi)$ or linear combinations of Slater orbitals $R_{nl} \, r^{n-1} \, e^{-\zeta r} \, Y_{l}^{m}(\theta, \phi)$ all has spherical harmonics as their angular part.

[^3]: The word "can" was chosen as degenerate states with the same $L$ and $S$ but different $M_L$ and/or $M_S$ can be linearly combined to produce an energy state not characterized by the four quantum numbers. It is would be more accurate to say that an energy state *can be chosen* to be characterized by the four quantum numbers.

[^4]: The word "electronic" was sneakily removed as it is evident that the discussion is about electronic wave functions. Depending on the element/isotope, the nucleus can have its own spin angular momentum (recall the principles of NMR). Anyway, from this point onward, it is assumed that only electronic properties are concerned.

[^5]: Complex atomic orbital with spherical harmonics as the angular part.

[^6]: It's not really that hard, but if you are not feeling like doing any math, then see *Levine*, pg ?.
