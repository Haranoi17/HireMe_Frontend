const createMockOfferData = () => {
    return {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFalwwIuaWcKHRhWAKbalNJwnaB88m1et7C2n6hsFAvk-JF3vIWQLn4hCHwP7fA0_8zM&usqp=CAU",
        title: `MockOffer`,
        description: 'Let me do it for you!'
    }
}

export default function getMockOffers(count) {
    return Array(count).fill(createMockOfferData());
}