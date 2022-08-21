---
layout: post
title:  "Atomic Term Symbols: Part 1 - The Preliminaries"
categories: physical-chemistry
lang: en
published: false
---

# Introduction

This article is an in-depth explanation on atomic term symbols based on *Quantum Chemistry* by Levine to supplement chapter 8 of *Physical Chemistry: A Molecular Approach* by McQuarrie. A good understanding of preceding chapters, notably chapters 6 and 7, is required.

The notation used in this article is based on the latter textbook.

# The Atomic Hamiltonian

We start with the Hamiltonian for multi-electron atoms. The Hamiltonian for an atom with $n$ electrons and a nuclear charge of $Z$, in atomic units, is as follows.

$$\hat{H} = \sum_{i\,=\,1}^{n}\left ( -\frac{1}{2}\nabla_i^2 \right ) + \sum_{i\,=\,1}^{n}\left ( -\frac{Z}{r_i} \right ) + \sum_{i}\sum_{j\,>\,i} \left ( \frac{1}{r_{ij}} \right )$$

The potential term only includes Coulombic interactions. For now, we ignore any terms arising from quantum mechanical interactions, as their contribution is small[^1].

The eigenfunctions of $\hat{H}$, $\psi \left(r_1, \theta_1, \phi_1, \sigma_1;\,r_2, \theta_2, \phi_2, \sigma_2;\, \cdots ;\,r_n, \theta_n, \phi_n, \sigma_n \right)$[^2], are the energy states of helium. This $\psi$ can be obtained numerically (with near-exact results) or with approximations such as the Hartree-Fock self-consistent-field (SCF) method with Slater-type orbitals (STOs), which retains the orbital concept.

The details of $\psi$ are not important. What is important is the fact that $\psi$ is an eigenfunction of the operator $\hat{H}$. This will prove to be very important, as we discover other properties of $\hat{H}$ and $\psi$.

# Complete Set of Commuting Observables

Consider a hydrogen-like atom with one electron. The $\psi$ of this system are the atomic orbitals. As you may know, $\hat{H}$ commutes not with $\bold{\hat{l}}$, but with $\hat{l}^2$[^3]. As a result, $\psi$, the eigenfunction of $\hat{H}$, can be chosen to also be an eigenfunction of $\hat{l}^2$. Even if $\psi$ happens to not be an eigenfunction of $\hat{l}^2$, a suitable linear combination of $\psi$ has to be an eigenfunction of $\hat{l}^2$.

Physically, this means that particular energy states have a definite value of the observable $\left\| \bold{l} \right\|^2$ as well as $E$, the energy. 

The same can be said with $\hat{l}_z$, which commutes with $\hat{H}$. Furthermore, $\hat{l}_z$ commutes with $\hat{l}^2$. This means that a $\psi$ can be chosen to be an eigenfunction of $\hat{H}$, $\hat{l}^2$, and $\hat{l}_z$. Physically, this means that particular energy states have a definite value of $E$, $\left\| \bold{l} \right\|^2$, and $l_z$.

The electronic spin angular momentum operators are similar in this regard. $\hat{H}$ commutes with $\hat{s}^2$ and $\hat{s}_z$ as $\hat{H}$ is not dependent on electronic spin. $\hat{s}^2$ and $\hat{s}_z$ commute with each other (more precisely, are defined such that they commute with each other). Any orbital angular momentum operator ($\hat{l}^2$ and $\hat{l}_z$) commute with any spin momentum operator ($\hat{s}^2$ and $\hat{s}_z$) because the former is dependent on only spatial variables, while the latter is dependent on spin variables.

As a result, the operators $\hat{H}$, $\hat{l}^2$, $\hat{l}_z$, $\hat{s}^2$, and $\hat{s}_z$ all commute with each other as shown below.

![Commuting Operators](/assets/img/atomic-term-symbols/pentagram_1.png)

Mathematically, this means that particular wave functions are eigenfunctions of $\hat{H}$, $\hat{l}^2$, $\hat{l}_z$, $\hat{s}^2$, and $\hat{s}_z$; thus, they satisfy the following.

$$\hat{H} \psi = E \psi$$

$$\hat{l}^2 \psi = \left| \bold{l} \right|^2 \psi$$

$$\hat{l}_z \psi = \bold{l}_z \psi$$

$$\hat{s}^2 \psi = \left| \bold{s} \right|^2 \psi$$

$$\hat{s}_z \psi = \bold{s}_z \psi$$

Physically, this means that particular energy states have a definite value of $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$. For example, the wave function $\psi = \frac{Z^\frac{3}{2}}{\sqrt{\pi}}e^{-Zr} \alpha(\sigma)$ (which translates to one electron in 1s orbital, spin up) has a definite value of $E = -Z^2 m_e e^4/8\epsilon_0^2h^2$, $\left\| \bold{l} \right\|^2 = 0$, $l_z = 0$, $\left\| \bold{s} \right\|^2 =  \hbar^2/2$, and $s_z = +\hbar/2$ (in SI units)[^4].  

![Hydrogen](/assets/img/atomic-term-symbols/hydrogen.png)

Any energy state can be expressed as a linear combination of degenerate energy states with a definite value of $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$. In mathematical terms, they form the eigenbasis of $\hat{H}$. With this in mind, we will now **limit our discussion of energy states to energy states with a definite value of $E$, $\left\| \bold{l} \right\|^2$, $l_z$** as it is very time-consuming to repeat this fact for all occurences. On that note,

> An energy state of a hydrogen-like atom is characterized by $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$

This means that instead of describing $\psi$ by its functional form $(\frac{Z^\frac{3}{2}}{\sqrt{\pi}}e^{-Zr} \alpha(\sigma))$, we can describe it by specifying its $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$.

However, it is a bit awkward to list the exact value of observables $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$ everytime. Instead, we can call these values them with their associated **quantum numbers** ($n, l, m_l, s, m_s$), which arise from the derivation of $\psi$ (they are integers or half-integers due to the boundary conditions imposed on $\psi$).

For hydrogen-like atoms, in SI units, 

$$\hat{H} \psi = E \psi = -\frac{Z^2m_ee^4}{8\epsilon_0^2h^2n^2} \psi $$

$$\hat{l}^2 \psi = \left| \bold{l} \right|^2 \psi =l\left(l+1\right)\hbar^2 \psi $$

$$\hat{l}_z \psi = \bold{l}_z \psi = m_h \hbar \, \psi $$

$$\hat{s}^2 \psi = \left| \bold{s} \right|^2 \psi =s\left(s+1\right)\hbar^2 \psi $$

$$\hat{s}_z \psi = \bold{s}_z \psi = m_s \hbar \, \psi $$

In listing $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$ to specify a particular $\psi$, we can substitute $E$ with the principle quantum number $n = 1, 2, 3, \cdots$. 

We can substitute $\left\| \bold{l} \right\|^2$ with the (orbital) angular momentum quantum number $l = 0, 1, 2, \cdots, n$.

We can substitute $l_z$ with the magnetic quantum number $m_l = -l, -l+1, \cdots, 0, \cdots, +l-1, +l$.

We can substitute $\left\| \bold{s} \right\|^2$ with $s$. For hydrogen-like atoms, $s=1/2$ as there is only one single electron. Therefore, in practice (in general chemistry and elsewhere), $s$ is often omitted as it isn't necessary nor useful. The reason this is here is because we will deal with spin in greater depth with multi-electron atoms later on.

Lastly, we can substitute $s_z$ with the spin quantum number $m_s$. As $s = 1/2$, $m_s = +1/2$ (spin up) or $-1/2$ (spin down).

For example, we have described a 1s, spin up energy state $\psi$ by its functional form $(\frac{Z^\frac{3}{2}}{\sqrt{\pi}}e^{-Zr} \alpha(\sigma))$, and by its complete set of commuting observables $E$, $\left\| \bold{l} \right\|^2$, $l_z$, $\left\| \bold{s} \right\|^2$, and $s_z$. Now, we can describe it very easily with the appropriate quantum numbers: $\left(n, l, m_l, s, m_s\right) = (1, 0, 0, 1/2, +1/2)$. 

![Quantum Numbers](/assets/img/atomic-term-symbols/hydrogen_quantum_numbers.png)

We can adopt the **bra-ket notation**, where a vector (a wave function) is denoted by a bra($\|$) and a ket($ \rangle $). A very apt name for an energy state would just be a list of its appropriate quantum numbers ($n\,l\,m_l\,s\,m_s$), and this goes inbetween the bra and the ket.

$$\psi = \psi_{\left(n, \,l, \,m_l,\, s,\, m_s\right)} = \left |\, n\,l\,m_l\,s\,m_s\,\right \rangle$$

1s, spin up energy state $\psi$ is therefore $\left \|\, 1\,0\,0\,\frac{1}{2}\,+\frac{1}{2}\,\right \rangle$.

![Bra-ket Notation](/assets/img/atomic-term-symbols/hydrogen_bra_ket.png)

To conclude, this section can be condensed into a single statement:

> An energy state of a hydrogen-like atom is characterized by orbital and spin quantum quantum numbers. With the bra-ket notation:
>
> $$\psi = \left |\, n\,l\,m_l\,s\,m_s\,\right \rangle$$

# Multi-electron Atom

It would be nice if the energy state of multi-electron atoms (their electronic wave functions) are described completely by similar quantum numbers.

One speculation one might have is that such energy state are described by quantum numbers for each electron. For example, an energy state of a neutral helium atom might be described as $ \left \|\, n_1\,l_1\,m_{l1}\,s_1\,m_{s1};\,n_2\,l_2\,m_{l2}\,s_2\,m_{s2}\,\right \rangle$. For the ground state helium atom, perhaps $ \left \|\, 1\,0\,0\,\frac{1}{2}\,+\frac{1}{2};\,1\,0\,0\,\frac{1}{2}\,-\frac{1}{2}\,\right \rangle$?

![Helium](/assets/img/atomic-term-symbols/helium_1.png)

If this seems too convenient, it is because this is incorrect. There are two reasons why energy states cannot be described by quantum numbers for **each** electron.

First, we go back to our discussion of hydrogen-like atoms. For an energy state to be described by quantum numbers, the operator associated with the observable that is described by the quantum number (i.e. $\hat{s}_z$ for $m_s$) must *commute* with the the Hamiltonian, $\hat{H}$.

For a helium atom to be described by $ \left \|\, n_1\,l_1\,m_{l1}\,s_1\,m_{s1};\,n_2\,l_2\,m_{l2}\,s_2\,m_{s2}\,\right \rangle$, operators $ \hat{H} _{1} $, $ \hat{l} _{1} ^{2} $, $ \hat{l} _{1z} $, $  \hat{s} _{1} ^{2} $, $ \hat{s} _{1z} $, $ \hat{H} _{2} $, $\hat{l} _2 ^2$, $\hat{l} _{2z}$, $\hat{s} _2 ^2$, and $\hat{s} _{2z}$ must commute with $\hat{H}$. Ignoring $\hat{H} _1$ and $\hat{H} _2$[^6], operators $\hat{l} _1^2$, $\hat{l} _{1z}$, $\hat{s} _1^2$, $\hat{s} _{1z}$, $\hat{l}_2^2$, $\hat{l} _{2z}$, $\hat{s} _2^2$, and $\hat{s} _{2z}$ *do not commute* with $\hat{H}$

This means that an energy state does not have definite values of the observables $E$, $\left\| \bold{l} _1 \right\| ^2$, $l _{1z}$, $\left\| \bold{s} _1 \right\| ^2$, $s _{1z}$, $\left\| \bold{l} _2 \right\| ^2$, $l _{2z}$, $\left\| \bold{s} _2 \right\| ^2$ and $s _{2z}$, as the energy state is *not an eigenfunction* of all of the operators listed above. It is not possible to assign the quantum numbers $l _1\,m _{l1}\,s _1\,m _{s1};\,l _2\,m _{l2}\,s _2\,m _{s2}$.

Second, the scheme $ \left \|\, n_1\,l_1\,m_{l1}\,s_1\,m_{s1};\,n_2\,l_2\,m_{l2}\,s_2\,m_{s2}\,\right \rangle$ implies that we can distinguish the two electrons: one is spin up and one is spin down. However, electrons are all identical in nature and it is impossible to distinguish between electrons in an atom. For the ground state He, (1) there is no "electron 1" and "electron 2" and (2) no electron is simply spin up or down, but any electron can be spin up or down upon measurement.

![Helium](/assets/img/atomic-term-symbols/helium_2.png)

If so, what are the quantum numbers that completely describe an energy state of a multi-electron atom? Another way of saying this would be "which operators commute with the Hamiltonian to form a complete set of commuting observables?"

For starters, the total[^7] orbital angular momentum operator $\hat{L}$ is defined as the sum of all orbital angular momentum $\hat{l}_i$ for all electrons.

$$\hat{L} = \sum_i \hat{l}_i$$

This is the orbital angular momentum operator of the entire atom. The operator $\hat{L}^2$ and $\hat{L}_z$ commutes with each other, as well as with $\hat{H}$.

The total[^7] spin angular momentum operator $\hat{S}$ is defined as the sum of all spin angular momentum $\hat{s}_i$ for all electrons.

$$\hat{S} = \sum_i \hat{s}_i$$

This is the spin angular momentum operator of the entire atom. The operator $\hat{S}^2$ and $\hat{S}_z$ commutes with each other, as well as with $\hat{H}$.

As expected, any angular momentum operator ($\hat{L}^2$ or $\hat{L}_z$) commutes with any spin angular momentum operator ($\hat{S}^2$ or $\hat{S}_z$). We see that similar to hydrogen-like atoms, the operators $\hat{H}$, $\hat{L}^2$, $\hat{L}_z$, $\hat{S}^2$, and $\hat{S}_z$ all commute with each other as shown below.

![Commuting Operators](/assets/img/atomic-term-symbols/pentagram_2.png)

This means that energy state $\psi \left(r_1, \theta_1, \phi_1, \sigma_1;\,r_2, \theta_2, \phi_2, \sigma_2;\, \cdots ;\,r_n, \theta_n, \phi_n, \sigma_n \right)$ can be described completely by the observables related to $\hat{H}$, $\hat{L}^2$, $\hat{L}_z$, $\hat{S}^2$, and $\hat{S}_z$ as $\psi$ is an eigenfunction of all of the operators above. 

$$\hat{H} \psi = E \psi$$

$$\hat{L}^2 \psi = \left\| \bold{L} \right\|^2 \psi$$

$$\hat{L}_z \psi = \bold{L}_z \psi$$

$$\hat{S}^2 \psi = \left\| \bold{S} \right\|^2 \psi$$

$$\hat{S}_z \psi = \bold{S}_z \psi$$

As for the quantum numbers associated to these operators and observables, we will go over the principle quantum number $n$ equivalent of multi-electron atoms last, as that is a bit different. Anyway, in SI units,

$$\hat{L}^2 \psi = \left\| \bold{L} \right\|^2 \psi =L\left(L+1\right)\hbar^2 \psi $$
$$\hat{L}_z \psi = \bold{L}_z \psi = M_L \hbar \, \psi $$
$$\hat{S}^2 \psi = \left\| \bold{S} \right\|^2 \psi =S\left(S+1\right)\hbar^2 \psi $$
$$\hat{S}_z \psi = \bold{S}_z \psi = M_S \hbar \, \psi $$

For the observable $\left\| \bold{L} \right\|^2$, we use the total orbital angular momentum quantum number $L = 0, 1, 2, \cdots$. 

For the observable $L_z$, we use $M_L = -L, -L+1, \cdots, +L-1, +L$.

For the observable $\left\| \bold{S} \right\|^2$, we use the total orbital angular momentum quantum number $S = 0, 1/2, 1, 3/2, \cdots$. Unlike $L$, $S$ can take on half-integer values.

For the observable $S_z$, we use $M_S = -S, -S+1, \cdots, +S-1, +S$. Depending on the value of $S$, $M_S$ can take integer values (e.g. $M_S = -1, 0, +1$ for $S = 1$) or half-integer values integer values (e.g. $M_S = -1/2, +1/2$ for $S = 1/2$).

The observable $E$, energy, is problematic as although it is discrete, there is no formula to relate a quantum number to its corresponding observable. In fact, there is not much pattern at all! Instead of using quantum numbers like hydrogen-like atoms, we need a different scheme to describe energy in an easy way.

Luckily, for most electron configurations (ex. $1s^22s^22p^3$), no two energy states has the same $L$, $M_L$, $S$, $M_S$. Therefore, the electron configuration can substitute $E$.

To sum up, either (1) $E$, $L$, $M_L$, $S$, and $M_S$ or (2) the electron configuration, $L$, $M_L$, $S$, and $M_S$ can be used to specify an energy state.

> An energy state of a multi-electron atom is characterized by its electron configuration and orbital and spin quantum quantum numbers. With the bra-ket notation:
>
> $$\psi = \left |\, (e^- \text{ config)}\,L\,M_L\,S\,M_S\,\right \rangle$$

As an example, the ground state helium atom can be expressed as $\left \|\, 1s^2\,0\,0\,0\,0\,\right \rangle$ as $L=0$, $M_L=0$, $S=0$, and $M_S=0$ (we haven't explained how these values are what they are, for now).

# Footnotes

[^1]: We are also ignoring nuclear mass and motion (rather considering them to be fixed in space) and nuclear spin. The wavefunction is technically an **electronic** wavefunction.

[^2]: The variable $\sigma_i$ is the spin variable of the $i$^th^ electron.

[^3]: $\bold{\hat{L}}$ and $\hat{L}^2$ in the textbook

[^4]: In atomic units: $E = -Z^2/2$, $\left\| \bold{l} \right\|^2 = 0$, $l_z = 0$, $\left\| \bold{s} \right\|^2 = 1/2$, and $s_z = +1/2$

[^6]: I do not know how these two operators would be defined.

[^7]: Electrons only, ignoring nuclear motion and spin. 