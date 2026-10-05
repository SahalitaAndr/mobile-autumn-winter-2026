import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createPost } from '../../api';
import { colors } from '../../theme/colors';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);

  const canSend = title.trim() !== '' && content.trim() !== '' && !sending;

  async function onSubmit() {
    if (!canSend) return;
    setSending(true);
    try {
      await createPost(title.trim(), content.trim());
      setTitle('');
      setContent('');
      Alert.alert('Done', 'Post published');
    } catch (e) {
      Alert.alert('Error', e instanceof Error ? e.message : 'Failed to send');
    } finally {
      setSending(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Title (start with Gerasimov)"
          placeholderTextColor={colors.textSecondary}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Post text"
          placeholderTextColor={colors.textSecondary}
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Pressable
          style={[styles.btn, !canSend && styles.btnDisabled]}
          onPress={() => void onSubmit()}
          disabled={!canSend}
        >
          <Text style={styles.btnText}>{sending ? 'Sending…' : 'Publish'}</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.card,
    backgroundColor: colors.card,
    color: colors.textPrimary,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  btn: {
    backgroundColor: colors.accent,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnText: {
    color: colors.background,
    fontWeight: '600',
    fontSize: 16,
  },
});
