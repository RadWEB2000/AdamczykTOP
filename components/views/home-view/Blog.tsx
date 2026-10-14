import { PrimaryButton } from "@/common/buttons";
import { ArticleCardHome as Card} from "@/common/cards";

export default function Blog(){
    return (
        <div className="section-width mx-auto mt-[15vh] @container/wrapper">
            <section className="@container/content">
                <hgroup
                    className="flex flex-col *:text-balance *:leading-none"
                >
                    <h2 className="order-2 text-5xl-plus uppercase font-bold @xl2/wrapper:text-7xl-plus @xl3/wrapper:text-9xl @2xl2/wrapper:text-10xl">Wiedza i nowości SEO</h2>
                    <h3
                        className="order-1 text-lg text-brand-400 mb-2 @xl2/wrapper:text-xl @xl3/wrapper:text-3xl @2xl2/wrapper:text-4xl"
                    >Blog</h3>
                </hgroup>
                <p
                    className="@xl2/wrapper:col-start-2 @xl2/wrapper:row-start-1 @xl2/wrapper:row-end-3 text-sm max-w-[75ch] leading-loose text-pretty text-base-300  @xl2/wrapper:text-base @xl3/wrapper:text-lg  @2xl2/wrapper:text-xl"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum, dolorum cupiditate ex nulla voluptatibus ea ipsa rem et, maiores voluptate recusandae, nihil tenetur minus accusamus sed quibusdam doloribus reiciendis.
                </p>
                <div
                    className="@container/buttons mt-5"
                >
                    <PrimaryButton
                        label="Wszystkie wpisy"
                        href="#"
                    />
                </div>
            </section>
            <div className="grid grid-cols-1 gap-2.5 mt-10 @md3/wrapper:grid-cols-2 @lg4/wrapper:grid-cols-3 *:mx-auto">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

// ArticleCardHome