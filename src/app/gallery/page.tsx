
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-") || img.id === "classroom" || img.id === "sports")

  const categories = ["All", "Events", "Campus", "Academic", "Sports"]

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Memories</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Photo Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Visual highlights of life at EduConnect Hub.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full space-y-12">
            <div className="flex justify-center">
              <TabsList className="bg-muted p-1 rounded-full h-12">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="rounded-full px-6 capitalize">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="All" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-white font-bold">{img.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Other content filtered specifically could go here, but for MVP "All" is populated */}
            {categories.slice(1).map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="text-center py-20 text-muted-foreground">
                  <p>Displaying images for {cat} category...</p>
                  <p className="text-sm">New photos are being uploaded by our team.</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
