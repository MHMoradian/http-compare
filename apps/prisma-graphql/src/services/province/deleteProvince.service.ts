
const deleteProvinceService = async (id: number) => {
	return await Province.deleteOne(id);
}

export default deleteProvinceService