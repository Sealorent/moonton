import Authenticated from "@/Pages/Layouts/Authenticated/Index";
import SubcriptionCard from "@/Components/Prototype/SubcriptionCard";
import { router } from "@inertiajs/react";   


export default function SubcriptionPlan({ auth, subcriptionPlans }) {

    const selectSubcriptionPlan = id => {
        router.post(route('user.dashboard.subcriptionPlan.userSubcribe',{
            subcriptionPlan : id 
        }));
    }
  
    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subcriptionPlans.map((item, index) => (
                        <SubcriptionCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            durationInMonth={item.active_period_in_months}
                            features={JSON.parse(item.features)}
                            isPremium={item.name === 'Premium'}
                            onSelectSubcription={() => selectSubcriptionPlan(item.id)}
                        />
                    ))}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}