
const Show = {
    props: ["hash"],
    data() { return { hashState: window.location.hash } },
    methods: {
        hashListenerACB() {
            this.hashState = window.location.hash;
        },
    },
    created() {
        window.addEventListener("hashchange", this.hashListenerACB.bind(this))
    },
    unmounted() {
        window.removeEventListener("hashchange", this.hashListenerACB.bind(this));
    },
    render() {
        return <div class={
            this.hash !== this.hashState ? "hidden" : 'notHidden'

        } >

            {
                this.$slots.default()
            }

        </div >

    }

}
export default Show;