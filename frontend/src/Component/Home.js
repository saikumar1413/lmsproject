import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
function Home(){
    return(
            <section class="pt-2 bg-white">
                <div><Navbar/></div>
                <div class="px-12 mx-auto max-w-7xl bg-#ebd5f9">
                    <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                            <span></span><br /> <span class="block w-full py-22 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Learning Management System</span> <span></span>
                        </h1>
                        <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                        Transforming Minds, Shaping Futures
                        </p>
     
                    </div>
                   
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, }}>
                            {/* Your text content goes here */}
                            <img src="data:image/jpeg;base64,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" alt="Description" style={{ maxWidth: '200%', height: 'auto', borderRadius: '10px' }} />
     
     
                        </div>
                        <div style={{ flex: 1, }}>
                            {/* Your image goes here */}
                            <center><h2><b>Learning Management</b></h2><br/><p>A learning management system is a software application or web-based technology used to plan, implement and assess a specific learning process. It's used for e-learning practices and, in its most common form, consists of two elements: a server that performs the base functionality and a user interface (UI) that is operated by instructors, students and administrators</p></center>
                        </div>
                    </div><br></br>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, }}>
                         
                            <center>
                                <h2><b>Webinars</b></h2>
                                <br></br>
                                <p><b>Webinars: Your Gateway to Expertise.</b></p>
                                <br></br><p>Webinars facilitate real-time collaboration among learners. Group discussions, collaborative projects, and team activities can be conducted during webinars, fostering a sense of community and teamwork.</p></center>
                        </div>
                        <div style={{ flex: 1, }}>
                           
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgVFRISGBIYEhkYGBIZEhoYEhgSGRgZGhkZGBkcIy4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJSw0NDQ0MTE0NDQ0MTY0NzU0MTQ0NDQxNDU0NDQ0NDE0NDQ0NDQ1MTQ0NDQ0NDY2NDU0NP/AABEIAK8BIAMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQIDBAUGB//EAEUQAAIBAgQDBQUDCQcCBwAAAAECAAMRBBIhMQVBUQYTImFxMkKBkaFSsdEHFBUjM2JyweElgpKisvDxg5MWNENTwtLi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEAAgICAwACAgMBAAAAAAAAAAECEQMhEjFBBHFhgRMyQhT/2gAMAwEAAhEDEQA/AOSMImPMsacTbRhMNY4xvGkMkBZYh6GckAWOBhDuJaFj2GNolzrCRrCJDTd6o51ux0Q3HhiVMXyl8IyuOhi22j9WhfUSPlInJpo6pphqdIiKItEiRmiVRNhL/gONNKqjX0vY+hmfQybSedo7VHCWnZ3HB1g6A+UfvMn2L4j3lMKx8S+E/wApq7zzSVOj0xdqxYMF4gGHeQou8O8ReHeAKvBeJvBeAKvCvCvBeAC8F4V4LwAXiTBCMAIxBijEmAJaVuPq2Bk+q1hM/wASrX0gMrKxzNeIyxwJFZIMnNTGqkdjVSdn0c4jamTF2kOSkOkRLIbYQot4SiCeCr6RAaKbaIWVhC1eO59IwY4JUyNCle0PMDGjAJbJQVa0YWOVDEpOb7Oi6HkklGkNW1j6NOkWc5I1PZTH93WAJ8L6fHlOp0nzKDOI4apaxG4M6b2e45TqUwpYZ7C631vM5Y+lxS/yaO8UDG1a+sO84HccvDvEXgvAF3h3iLw7wA7wXhXhXgB3gvCvCvADJiTAYRMAIwiYCY27WEAi42rYSgqnM0n4+rfSQVWCMSEh5I4FissA5IHhtrGoYM62YoSRJKHSMNL2jwtBQV3ZgHClKqWekmoDpVUeJWGZTfzAAN5E6I1ZTuYaSVxHhr0SC1mpt7FVdabfHkfIyKhmkR9BmN7Rxoi0rCDigIiKVoRGGwhQFokwBpzrCEDbwTB0FIY8jRi8NWhMy1ZOpvaKo4orUV1JBUg39JFV9IeH1M6XejnxrZ2/guLFWmrA3uAZYXmC7CcQtekTtqvod5vZxkqdHeMuSsF4d4m8O8yaFXh3iLwXgC7wXibwrwBV4LxN4LwAEwiYd4kmAAmRMXUsJIdpU46pAIVRsxgVYFWOKsEAFh2jgEFoBxgCKCwAQEzocwmllwfHikfEt1Oha1yAdCCDo6HmpGvqARVsZvezPZNO7WtiFLFhdKJuAFOxbqT021klJRVs3GLk6RY8KSjSpFwiVsJVH6ynqwpm+uW9yBt5i1j50XaPskaanEYVjVwp1sNXp/usOY/3ry2uHw9KkLJSpoP3UVb+thDp4tUuEyqCLEKAAR0IG886ytM7vDao45nHUfOILDqPnOvgU+VOmPPu1H8o8roN1T/CPwm/5/wZ/wCf8nGww6j5xU69Uq09iq2PIotrfKUHazsmhp/nGGSxUXeko8LLzZF5EcwN/XfUcqk6MywuKswEOEJa8I4M9fxMSlIGxe12YjdUHM9TsPM6HqcSm3NhuTYDmT5SfT4Ji2Fxh6lurLkH+a02uCwtOiLUkCci+9Q/xPv8BYeQkgoB7RNzyA1+MxZowdTgWLUXOHqEfugP/pJkBlKkgggjcEWI9QZ01EUndrDU6D8YMTQoVly1KYdbHVm/WKeWVh4l5bG3WWwczBj1EWl9xTs93CioqVGoEgFyfEhOgL2FiL+8NOoFxeiZyjFbag29elpuLXpmSZb8Lx7UnDruOXUTT0O3i3AamwHW4P0mNxGFqI5Q5bhQbqcynNsAR53HlYmQj5zUuMjEVKJ2jhXG6WIHgcH46j1EtbzlPYWnasXJIGWw6HUa32nThi6e2YTjJUztF2Sbw5ETFg6202HnJ+HovUBKrmsLkAC4H85jkjdMbgvLX9BOVVgQHPtK2gA9ReIxnBqiuFQFlIvm0FjrcHX/AHeUllZBeEwINjuDYjzhAE7An0EAF4RMVkb7Lf4TENcbi0AZxL2EpqrXMm4ypIIEEAojqiEojiiAGBABDEMCCnEy0TeCaXsr2bbEsHdSKIO22f8A/P3zUpUrZmMXJ0iT2O7OGqy16q/q1N0Qj2mGzN+6PqfLfoq2PvXMFUrSpZVAGnTkJmmqMCSHPz5zySk5Oz2Y4JKjS1FHMadZlONUK9F89NGemdwurL8NyPSPUeMONCbx8cWNpLN8WujPp2oW9ipBG4O4j68eRuZlriHo1dKlOm3qoJ+e8iv2YwtTVC6HoGzL8j+M0uLM3JA/OlexvNHwvHAgC+wlKnZ39QUVqfeq5dKozAsCtijqSbDYgjY+RMqMLiqlF8lVWRxyYW+IOxHpJVbRu1JUS+0XY5WritSsuHY5qqjdOZKDoxsPIt02veGcLRkc1C1GnRpowUUsxyM2VQAbG2vxveXXBKmajdspzGxU6+C1tfiWuPKXOMofrqwy0yDh8MAr/syBU943E9EJNrZ4skeMjPcO4Jh6jXTFX1vlfDlN+pFx8Iz2i4DUornRc1MnxOtmAPmRqJs8Ng1VbChQPlTex+8wqmHI1pu6ON0cbrzF9mHkZqzBzzCcNr1gQlO6jV3OVEXyLmwEk/oqgt+8xlK/NaVJqv8AmACg+hl/2gwGeqwqVXXDq2WnhaSZqjGwJyoui7nxNI44ZkF1wFFF5PisT4rdSl1t8pQRMfSpnC56LvUJdKDK1IqCMrNolyDcCx9Zy3tJwrumBCsFtoDfMFBsVN9SVP0Kk7ztOHQKKXgwy/2hR0ouWQ+B9TZjZvL0mJ7a0lP5zdVJWu77voucq2x6G565BCIU35Luyi47EmpWQHC0NXBHhdyDkT/5HyAHvTrL9neBK1jhsGD/AAiw9TsJS/kyq4etw9aCUkL06zGuoNw2dXK1btrY2VeoKEcooqAbNh2DDdQzBb+YILfWenDijku2/wBHzvm/MyYGlGN39mZ/Kd2Yp4Mpi8JTC0WsjKuqU6ljZ/7w06XHnK/sXQqOj16hzEtkS6roB7R266fCdG49ToUuFVFegveYhRTSlqGaux8G9yMpGa/IITK3g3Zs0cNTp94CVXU93uTqfe6meXLq0tn0PjtySlJVasPC08w1G33TVV3TC081MHPUUWLG9gBe5Hx285T4LDNRcMLVCCLJkIJG2mp11i+3OL7t6eY2V8qD+Isb/wApzxxt0dssqi2t0m/srsbxKoRmJdueupP8I6SVwntA4IvmKX8Ste4H7oOx+kymEqVGUZzspVtC1QVc5120GW1ul5b4Th4AXPUqMxbLfQAqTmJt1Hsg87T2/wAUVG0vD5K+RNypt9o03G8NTQIyX8ZLdVy6HTpvE4NO7pl23sW5eyBe3x/CWRp5cKi2JGW121Kjdb/QSK2SpTN7ZbEMDsLb39LfSeWLXJWfSnfBtdkH9KEMQQthqyi+dUA15ZSRuQD16Q+L07pnG4GumuX+kgKqGzGwDtlL2YE30YZb2UkG17nc7S0x1YU6ZJFwBYLvc7AT054RVcUfP+BlyZOXN2vDIV3uYgCWH5kiX7xwCRoADcH0jlPBU3sUcHKNQQbluWnSeY+iQFEUIedubN8zF3zC/Mb+Y5H+XygokRQhCKEA5p2a7MNiWDvpRB5XBcjkP3epnTsPRWmoRAAALaCwt0EGHoLTUKoAAAAAFgB5R5FnCc3J2d4xUVRBx6szWG3OZ/H4V1vlvNhUVQpY8pnanExcgrcek5s6xszFYumpBjmGxdOoLBgG5qd5dYhKdQaAekqsRwii+p8J6j+k1r0O/BwoeRkihiGQ6i4lRU4XUp/s65t9k6iNfpHEUzZ6YYdRHG+hyrtGkTGAk6srX0+fT0vL781p4mkFezWF1e3iV+RH4c5h8PxGlUI1KN0bT6zY8Mq2tY6S9EbTWiRwfDvQRKTm7qp8XJru5zD1vNnxNbpUIWmWFKkfG2VCA4bxtcWGnWUooCtTBDWdCcp6c7Hy1+kuOKhjTqhEWo/dUr0iGOZcwvoNxbNseU6wOGV2DCpnUHuqDaf+nVv8tTH2OhW509yoNR5o38pAwjoEANBF02XOtvS95NDqykB7gC+R9SPNG6+U2chviq6v4yl2sTTW+JcWHhU+6JnzwxF8X5pTXn3mKxBzt5lCy2+U1OKYKzXcIC2pUXqtoNL+6JluK0aSEumDSo3V6jsxPoCBKQk4emoFKww6/wBoUTag2anfI+5zGx/pMf2ppjvMUHLAEYg7csj6j5TT8MrFkpHuKdH+0aQyKhVT4H8Xivr5+Uz/AByl3lesgTOpruhQMczCpUyvqB4RkznysdZUDPfk6qV8Li6dWktVqNTOj3psKTUwLsc9rAghbHmRadTxnbNqVIu2AxDWqZQiFHdhycAe762PlOZcYNUE4XBs1LDUDlcpnaqzsC5CkakC9rAjU66WlVwcYqnUvSxGJuLkh6Dd2coJIbM9r2B85tQk/DlLLBWm+u/wdCp8QfieLWq9OpSp0b06dB7ZxU0NWowGlyLKPIE+9L+s5B97TyGax1try8P08pQ8BdBVWqtIgVmfvXu+Va6FUHhOwYqddL6dZocfTckFAM1zcW019fSZjXKmMt8Ljv67GaVazCxsQdLbC385I43w9MdhVotXC1y5amxGucXsGA3FtPluRG2phQb20GptqbfeY4rlcthd7g2Gpz7gC/QDfymGrlSO0XxgnJ1Rk+HdnsctZu/w5vTA7uqrZhU3FzlNmAA94A6ianhfBambPW8KjqfER0sNpY0MfVV8zglWOXwm6oRuW2yjTfWWFV7Lv4T16zo3JKmcIxxSlyiuhnFU2d7Zv1dhYDqI3Sw6obKCzEE5bi5tYXsbDoPlGsVxBKY1NtL2963W3ujzMQtRwiMSENZtXHtKmUlFuwtmPnaxNrG0wlb0dpz4xtj9bCswH6rmTa63BN7km/O5+cz2KxDGsykle7Buh3Y21Ppt85cHHOjFFqllDAd5lzstwdLD2jcDYaX15xjjOGayYgooYqqVQdLKToRr1NviOk1KDSts4YssJtqKprsx7OWOYnU6kxdByDoba3B8+Xw1j1bCMDdPHTOxXX4G0OjhWOrjIg3LafAXmrjx7/VGeE+fWu7se4mhLBtblR4beyP93kW2UW5n6D+v4R3HVyz8rLoCOY9ZHBnI9QoRYiFixBSQIGe0J3Eiu88p6R6o5YWmXxtEK59Zfq55Ss4ggv585GaiVTrltc2vz5Q+5PIxddkKkEi21pQYhGQ+Coy+jG3yOk0o2VyotnpsOsSi5hqLnpzlYnGaiCzqH/eGh+Iiv0xTbQgqfP8AETXFk5xLzhndiouUDXdWTnfqPjylnj8A1Fu+o3NPd6Y2H76Dl5iUvC8WrODo1tQfpvNjhcQCBpIG/UOcG4gNLHwvbXlfkfTl8Zpq9Raj5qeKoqSqiwqgPdRqCB9x6TBcW4bXFN0woUGpmu5cju1bcIANzc68o1wLgmKQKtZkzJbLUFySo2D+Y+18+s6wWjz5GuWjp61HIUNXolibWzAq/wACNDtt9IfcI3tPSVt8yPz81Mq8PhWygMFI6Eaeo6HzkhcKzNbqLXO9+V+vrOiObLCtSpliwdGYm9meyj4DeNVVcrZa9JP4SBb4jWQ6uCqIRa2muvWNPh3N7FepPnBCup4CqtdHrcQosiVVfI9ck2B5AmwNric+472gprxPKMRWWlTxNR3amMys1yQujXKjY6e+3QGbfivDhU2Y5rEZkU+HzU8zrvy9ds5hvye0l+3e98zEXOoOtvSUFf2griiayhGb84YVUbVVqZgA635MAL2tc6aX3oKHaM3WmqVCAoRQCCzWVlUBcpOzMOZ18p1PDcIppTZMQ5rowWyVMrIuXpcenyvFHGcLwbF0p4anUI1qEAVCf4tT+M6LLJJK+jg/iwbba7dlb2b4E7iglQ1KZR2xVdRfuyrs57pjzIJA390npOi97Vy58q2tfu9c+X+K9r25W8r85kuzXbTDV8R+bipmziwYK+QMASFLFQACL897DnNXUwtXIUWoAuUqCUu4FrDW9j62mE7NTTWl1Q5jKAqqpGtiGHnpt/P1AlTUrU1ZWBuoVgSNhmykMT08Nr+cexfHUw2GeriB3fcgBh7rE6LkPMMdunPac1X8qFE5lyVF8RIcINQdTpcW1k6Zr+8Fs3uJxQpq4JXK4YrYgvmPuny1vf8A2cd237X1KNDLTJWpUORDmvU5ZnHS3lzIlZ/42wh1tWv/AAD/AO0zPEOKU8bVZnZ0Hsp4iLINrgaXO59fKWUkMeNp7ZCw/HayH/zNQ9SarNmPMkk6j+U69+S/tKMbQfDVTmqUvZLa56B29cp8PoV85xWrw2zWUgg7Gbjshw9sNZ1Yh+ZBINjuNJi14dZJtUzrOK4W12CU6dmChW2NOwtdR5bi1tfnKXtfxLMwoKbqli56vbQfAfU+Uo34hWJ/bVf+4/4yMzEkkkkk3JJuSepM05trZxx4owba9H8PiHWwDGwJIXkT0PX0i62IqMDmJ1a9rWHy8tJEvDBmTqLBigY2DFAwUdWLEZUxwGALYiR3cCKd7CQK1Qc55T1IknECQMUc2t4w9WxELEVrLcWiikLE0AdxKqsFEtMdh6ypndqaIds7gXvr7OpGkoKtdBvUpt6Zz/qUTpGLMSmhqsy9ZEFRL62jz4tL+yh8z/QGJbGADwol/JP+J1UTg5C6WKKEGjcv9kKWB+Am44NxDEtZWwtRTYeMexqAdzb4zA0+L1F2sP7n9ZZYXtPUXeoF/wCkD95kcLKsjR2HDJlUDdtyQRa8kBW6L8W/pOaYPtNmtfG5f7lJf9UskxpqbcSrf3Ww/wCEq1ozd7Og03ZffAHS1xJNLiKpqSNBve33zni4IOPFisa/n3ij/QBI1Ts9Qb2nxjDoajn+ctijoWP7R4ddXqUxpuXEz2N7d4FL3rofJPF915mx2YwQ3oVGt9pmP+poTYHAUte5or5syD+cWCRivymUdqVKq55WWw+uv0ldV7Y8SraUsLkB2Zrn8IdXj+Dp+y1H0QZz/lErMT20QaIrt52Cj8fpAskvguKV/wBriRTU+6pt90SnZ7C0/FWqM7c8zf7Mz2L7UYmpsQo8tT8/6SprYqo/tuzep0+U1RmzdntRhsNpRQXG2UcxJOI/LHxD3KWGA6ujFj/hcATm14ZbS2kUhZqu0XbzF8RVUxApd0pJyU1K3Yiwa7M3iGtuXiN73mfaihOlanblcOD8RkNj8T6mQ4LQQnUcMGYL39MAsBpnvqbc1A+ZEkUkVy6pSKsu3iYm+bLla5IDa8reyeW1TYydRx9UkA1GNtQGZjr5ecCy/wCH8HxJqAtTKgam7rb75uKFPItjvKfs29RqYZy2v71xb0O0unaZZpMImFeETBeAHeC8ReHeALvDBjeaANAJAMUGkfNDFSCkDEYyoBrSrf8AbY/deUmL4lUG1DEn/ot+E6V+j4n9Gic1BHXmzkpxeIqH9lUUdTTbb0trJrVKZTKRXJ+14lN/QbTpv6LEQ/Cb7GaUUvDDk36c04Rw/Dmsr1QzUzmBDqSNtCT6zTt2T4fUF00/hqX+hvLx+FONrGRqnC2+z8bTVsyyhrdg6fuVPgyg/dIVTsbXTYU2HkbH6y8q8PxCm6V6q+WjL8iIhcZj6e/dVB5qyN8xcS2Z0Z1+z9Rfbot8rj6RP6BpndLfC01adoXH7TDVB5qQ4/H6SQnG8I+jEKejKVP1jZVRim7NUzyker2UQ7XnRUp4ap7JT4EQPw2mdjJbFI5dV7Lsvsn6SJW4TXT3nt/EROqNwtgbqw+IlbxHgdSp7TfAaCaTJRy6rRqbEsf7xMjFAP8Aib7FdlanK405StxHZqoqkBST6S6Jsy/dfvL87GNkW0lrU4LVHuGMVOHOumU39IoEPIekSV8pKbCVF5EQxS+0YolkXJDy+smJRXkCY5ka2qWEtCyEKTW2sOv/ADHEpCxJa9twFv8AU6CS+6p2uX16RdLKBZaZa+msULIlBFOgS55E3P0Gkm8OwVSpUCeyp3Gi6eggTDVCbDw+k0fZnhJRi5Y3P3Q9BbNHgqAp0wByFosmCo3KNFpzNi7wi0bzQi0AcvCzRovGK+Mpp7TAeXP5QCZmgzyBTevV/ZUiB/7j+Ffgu5+knUOz2fWvUZ/3B4Kf+EakepMEIj8RTNkQNUqfYQZiD0Y+yv8AeIkmjgcTU9orSXoLPUt6nwqfg3rL3DYOnTUKiKqjYAAD5CSlSC0W0FohWMWINBwWgEEECXQx7Mh3EahQBxqFNuQjL8OpnkIqGGMoIdTgymQMR2fU+6D8JerUMcFSCUYyt2XTcLlPVSR90jNwevT9irUHkTmH1m+zCJKKeQgUYPPjKfNH9QQYa8YrL7dE+qm82z4NDykepwtDygGWTj9P31ZfVTJCcSw7+8vzltW4Ip5CV2I7NofcHykGwglF/sxnEcNo5SbL8pFq9m7eyXX0YyLX4PXylRVex6yksrqtbBsSpKXBsdecfPZqjUXOAQJVP2SdSTfNrLalisRTTIaZNhYES/TJ9kZez1M6IRf0kbH9m6jC2YW+Ml4DiLUnJcNY9VMn4rj9NiLS2yUjMp2TddTrJuG4KV5W9ZrKPEaJUaj5xnE4qnbRhJyZaRWYfhSKddZZFFproAJUjiS95YMJKxOIFhrI7KqAzxDPIT4sbKCT5QJhq9TYZR9ZKFkh8Qq7kD4yN+eljZEZz1tYfOWOF7Pru5LHzl3QwqILKoEaFMzlHhOIqau+Rfsrv85b4HglGnqEBb7Tat8zLQLFBZLLQlKYHKLVYoLFhZShBYsCGBDAgFgBBaGIIKCCHCMECghwQAoLQ4IABFCJhmAGIAIYhXgCy9oYe8YvBeUg/mMGYRpXitDAFlFPKM1MMp5Q9oYaAQnwanlGH4aDylmYM0AoqvCAeQlfX7P023QfKawQ2UQDB1ezCcgR6EiQ6vZQnao/3zoxpiMug6RbJRzQdjnDXFRvlLOl2ebTMzH1mzyDpFd2ItikZzD8IROUmrQtylt3Qg7oSGitFMwxTMse6g7qSgQQhiwklinDyRQIwSGEknJBklAwFisseyw8sA//2Q==" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                        </div>
     
                    </div><br></br>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, }}>
                            {/* Your text content goes here */}
                            <img src="data:image/jpeg;base64,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" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
     
     
                        </div>
                        <div style={{ flex: 1, }}>
                            {/* Your image goes here */}
                            <center><h2><b>Surveys</b></h2><br/><p>Use surveys to identify the specific training needs of learners or employees. This information can guide the development of future courses and training programs to address identified gaps in knowledge or skills.
     
                               </p></center>
                        </div>
                    </div><br></br>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, }}>
                           
                            <center>
                                <h2><b>Exams</b></h2>
                                <br></br>
                                <p>Exams provide a formal and structured way to assess learners' understanding of course material. They help gauge the level of knowledge and comprehension achieved by the learners.</p>
                                </center>
                        </div>
                        <div style={{ flex: 1, }}>
                            {/* Your text content goes here */}
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA7cbN4xiW3431LZvBSLCpVka7A4L7eAGBQ&usqp=CAU" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                        </div>
                    </div><br></br>
                </div>
            </section>
        )
    }
    export default Home;