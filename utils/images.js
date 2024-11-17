import AngularImage from "../src/assets/icons/angular.png"
import BootstrapImage from "../src/assets/icons/bootstrap.jpg"
import BulmaImage from "../src/assets/icons/bulma.png"
import DebugImage from "../src/assets/icons/debug.png"
import DenoImage from "../src/assets/icons/deno.png"
import ExpressImage from "../src/assets/icons/express.png"
import GatsbyImage from "../src/assets/icons/Gatsby.png"
import NextImage from "../src/assets/icons/next.png"
import NodeImage from "../src/assets/icons/node.png"
import NuxtImage from "../src/assets/icons/nuxt.png"
import PackageImage from "../src/assets/icons/package.jpg"
import ParcelImage from "../src/assets/icons/parcel.jpg"
import PythonImage from "../src/assets/icons/python.png"
import ReactImage from "../src/assets/icons/react.png"
import RubyImage from "../src/assets/icons/ruby.jpg"
import SvelteImage from "../src/assets/icons/svelte.png"
import TailwindImage from "../src/assets/icons/tailwind.png"
import ViteImage from "../src/assets/icons/vite.jpg"
import VueImage from "../src/assets/icons/vue.png"
import WebpackImage from "../src/assets/icons/webpack.png"
import MD from "../src/assets/icons/md.png"
const images = {
    frontend:[AngularImage,ReactImage,VueImage,SvelteImage],
    framework:[ExpressImage,GatsbyImage],
    styling:[TailwindImage,BootstrapImage,BulmaImage],
    nodeEnv:[NodeImage,ExpressImage,DenoImage],
    debug:[DebugImage],
    bundlers:[ViteImage,WebpackImage,ParcelImage],
    ssg:[NextImage,NuxtImage],
    package:[PackageImage],
    others:[PythonImage,RubyImage],
    md:[MD]
}
export {images}