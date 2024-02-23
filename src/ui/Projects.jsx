import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ProjectText } from "../components/ProjectText"

export const Projects = () => {
    return (
        <section className="max-w-7xl m-auto p-10">
            <div className="text-center gap-10">
                <Button>
                    Social Media Flyer
                </Button>
                <div className="flex sm:flex-col sm:items-center lg:flex-row lg:items-start">
                    <Card>
                        <div>
                            hello
                        </div>
                        <div>
                            hello
                        </div>
                        <div>
                            hello
                        </div>
                        <div>
                            hello
                        </div>
                    </Card>
                    <ProjectText>
                        Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Cupiditate recusandae dolor repellendus dolorum sit odit et laborum vero sed iure!
                    </ProjectText>
                </div>

            </div>
        </section>
    )
}
