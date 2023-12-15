// import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import { Link } from "@inertiajs/react";
import SubcriptionDetail from "@/Pages/Layouts/Authenticated/SubcriptionDetail";


export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">

            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt=""/>
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((item, index) => (
                            <MenuItem
                                key={`${index}-${item.text}`}
                                link={item.link}
                                icon={item.icon}
                                text={item.text}
                                isActive={
                                    item.link && route().current(item.link)
                                }
                            />
                        ))}
                        
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {/* <Link href={route('user.dashboard.subcriptionPlan.index')} className="side-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M17.7689 8.3818H22C22 4.98459 19.9644 3 16.5156 3H7.48444C4.03556 3 2 4.98459 2 8.33847V15.6615C2 19.0154 4.03556 21 7.48444 21H16.5156C19.9644 21 22 19.0154 22 15.6615V15.3495H17.7689C15.8052 15.3495 14.2133 13.7975 14.2133 11.883C14.2133 9.96849 15.8052 8.41647 17.7689 8.41647V8.3818ZM17.7689 9.87241H21.2533C21.6657 9.87241 22 10.1983 22 10.6004V13.131C21.9952 13.5311 21.6637 13.8543 21.2533 13.8589H17.8489C16.8548 13.872 15.9855 13.2084 15.76 12.2643C15.6471 11.6783 15.8056 11.0736 16.1931 10.6122C16.5805 10.1509 17.1573 9.88007 17.7689 9.87241ZM17.92 12.533H18.2489C18.6711 12.533 19.0133 12.1993 19.0133 11.7877C19.0133 11.3761 18.6711 11.0424 18.2489 11.0424H17.92C17.7181 11.0401 17.5236 11.1166 17.38 11.255C17.2364 11.3934 17.1555 11.5821 17.1556 11.779C17.1555 12.1921 17.4964 12.5282 17.92 12.533ZM6.73778 8.3818H12.3822C12.8044 8.3818 13.1467 8.04812 13.1467 7.63649C13.1467 7.22487 12.8044 6.89119 12.3822 6.89119H6.73778C6.31903 6.89116 5.9782 7.2196 5.97333 7.62783C5.97331 8.04087 6.31415 8.37705 6.73778 8.3818Z" />
                            </svg>
                            Payments
                        </Link> */}
                        {UserOthers.map((item, index) => (
                            <MenuItem
                                key={`${index}-${item.text}`}
                                link={item.link}
                                icon={item.icon}
                                text={item.text}
                                isActive={
                                    item.link && route().current(item.link)
                                }
                                method={item.method}
                            />
                        ))}
                    </div>


                    {auth.activePlan && (
                        <SubcriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === 'Premium'}
                            activeDays={auth.activePlan.activeDays}
                            remainingActiveDays={auth.activePlan.remainingActiveDays}

                        />
                    )}

                </div>
            </div>
        </aside>
    );
}
