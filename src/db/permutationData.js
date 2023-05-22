import PublicGoogleSheetsParser from 'public-google-sheets-parser';

const spreadsheetId = "151oZhvAM27Wx91AsJby2MpZPxWcubRuGZh8RskWUPZ4"

export async function getPermutationData() {
	try {
		const parser = new PublicGoogleSheetsParser();
		const parsedResponse = await parser.parse(spreadsheetId);
		return parsedResponse;
	} catch (error) {
		console.error(error);
	}
};