let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../icons/', true, /\.svg$/))
} catch (error) {
    // console.log(error)
}
//importIcons作用:导入所有svg结尾的文件