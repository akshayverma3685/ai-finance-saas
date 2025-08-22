export const chatbotReply = async (message) => {
  if (!message) return 'Ask me about your finances.'
  if (message.toLowerCase().includes('report')) return 'You can generate monthly reports from the Reports page.'
  return 'I am your AI finance assistant. How can I help you today?'
}
