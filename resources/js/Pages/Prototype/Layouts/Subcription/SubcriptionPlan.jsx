import Authenticated from "@/Pages/Prototype/Layouts/Authenticated/Index";
import SubcriptionCard from "@/Components/Prototype/SubcriptionCard";


export default function SubcriptionPlan() {
    return (

        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubcriptionCard
                        name = "Basic"
                        price = {99000}
                        durationInMonth = {3}
                        features = {[
                            '480p Resolution',
                            'Watch on 1 Device',
                            'Films and TV Shows',
                            'Cancel Anytime',
                        ]}
                    />
                    <SubcriptionCard 
                        isPremium = {true}
                        name = "Standard"
                        price = {149000}
                        durationInMonth = {6}
                        features = {[
                            'Full HD (1080p) Resolution',
                            'Watch on 2 Devices',
                            'Films and TV Shows',
                            'Cancel Anytime',
                            'Kids Mode',
                            'Unlimited Download',
                        ]}
                        
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}